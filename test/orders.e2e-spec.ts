import { test, expect } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })

    // o exact serve para validar que com ctz vai ser 1 ali, e não 11, 111, ou alog que inclua 1.
    expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()

    expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()
})

test('paginate orders', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })

    await page.getByRole('button', { name: 'Próxima página' }).click()

    // o exact serve para validar que com ctz vai ser 1 ali, e não 11, 111, ou alog que inclua 1.
    expect(page.getByRole('cell', { name: 'Customer 11', exact: true })).toBeVisible()
    expect(page.getByRole('cell', { name: 'Customer 20', exact: true })).toBeVisible()

    await page.getByRole('button', { name: 'Última página' }).click()

    expect(page.getByRole('cell', { name: 'Customer 51', exact: true })).toBeVisible()
    expect(page.getByRole('cell', { name: 'Customer 60', exact: true })).toBeVisible()

    await page.getByRole('button', { name: 'Página anterior' }).click()

    expect(page.getByRole('cell', { name: 'Customer 41', exact: true })).toBeVisible()
    expect(page.getByRole('cell', { name: 'Customer 50', exact: true })).toBeVisible()

    await page.getByRole('button', { name: 'Primeira página' }).click()


    expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()
    expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()

    await page.waitForTimeout(350)
})

test('filter by order id', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })

    await page.getByPlaceholder('ID do pedido').fill('order-9')

    await page.getByRole('button', { name: 'Filtrar resultados' }).click()

    expect(page.getByRole('cell', { name: 'order-9' })).toBeVisible()
})

/* Demais filtros seguem a mesma lógica */