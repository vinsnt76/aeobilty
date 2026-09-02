import { test, expect } from '@playwright/test';

test.describe('AI Modal Assistant & Suppression Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage and wait for hydration
    await page.goto('/');
    await page.locator('#ai-assistant-trigger').waitFor({ state: 'visible', timeout: 15000 });
  });

  test('should display floating launcher when not suppressed in neutral viewport', async ({ page }) => {
    const trigger = page.locator('#ai-assistant-trigger');
    await expect(trigger).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  });

  test('should open modal dialog via launcher click and close via Escape', async ({ page }) => {
    const trigger = page.locator('#ai-assistant-trigger');
    await trigger.click();

    const dialog = page.locator('#ai-modal-dialog');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#ai-modal-title')).toContainText('AEObility Knowledge Navigator');

    // Input should be auto-focused
    const searchInput = page.locator('#ai-modal-dialog input[placeholder*="Ask about AEO optimisation"]');
    await expect(searchInput).toBeFocused();

    // Press Escape to dismiss
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('should open modal dialog via global keyboard shortcut (Cmd/Ctrl+K)', async ({ page }) => {
    // Dispatch shortcut
    await page.keyboard.press('ControlOrMeta+KeyK');

    const dialog = page.locator('#ai-modal-dialog');
    await expect(dialog).toBeVisible();

    // Close with close button
    const closeBtn = page.locator('#ai-modal-close');
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });

  test('should perform dynamic focus cycling without trapping disabled pills', async ({ page }) => {
    const trigger = page.locator('#ai-assistant-trigger');
    await trigger.click();

    const dialog = page.locator('#ai-modal-dialog');
    await expect(dialog).toBeVisible();

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // Check that whatever element received focus is enabled and not disabled
    const activeElement = await page.evaluate(() => {
      const el = document.activeElement;
      return {
        tagName: el?.tagName,
        disabled: (el as HTMLButtonElement | HTMLInputElement)?.disabled,
        ariaHidden: el?.getAttribute('aria-hidden')
      };
    });

    expect(activeElement.disabled).toBeFalsy();
  });

  test('should suppress assistant launcher when scrolled into high-intent form area using block: center', async ({ page }) => {
    const diagnosticSection = page.locator('#diagnostic-scanner, #hero-cta').first();
    
    if (await diagnosticSection.count() > 0) {
      // Use block: 'center' to avoid sticky navbars/footers and sub-threshold scroll failures
      await diagnosticSection.evaluate((el) => {
        el.scrollIntoView({ block: 'center', behavior: 'instant' });
      });

      // Allow intersection observer to evaluate
      await page.waitForTimeout(300);

      const trigger = page.locator('#ai-assistant-trigger');
      // Trigger should be suppressed
      await expect(trigger).not.toBeVisible();

      // Scroll back to neutral footer or top
      await page.evaluate(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });

      await page.waitForTimeout(300);
      await expect(trigger).toBeVisible();
    }
  });
});
