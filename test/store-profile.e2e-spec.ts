import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    // abre menu
    await page.getByRole('button', { name: 'Pizza shop' }).click()
    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

    // inseri info
    await page.getByLabel('Nome').fill('Rocket Pizza')
    await page.getByLabel('Descrição').fill('Tchain')

    // salva
    await page.getByRole('button', { name: 'Salvar' }).click()

    // aguarda quaisquer reqs http sendo feitas
    await page.waitForLoadState('networkidle')

    const toast = page.getByText('Perfil atualizado com sucesso!')

    expect(toast).toBeVisible()

    await page.waitForTimeout(2000)
})
