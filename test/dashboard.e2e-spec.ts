import { test, expect } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
    expect(page.locator('p').filter({ hasText: '-5% em relação a ontem' }).locator('span')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('20', { exact: true }).first()).toBeVisible()
    expect(page.getByText('+7%')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('5', { exact: true })).toBeVisible()
    expect(page.locator('p').filter({ hasText: '-5% em relação ao mês passado' }).locator('span')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('R$ 119,00')).toBeVisible()
    expect(page.getByText('+15%')).toBeVisible()
})