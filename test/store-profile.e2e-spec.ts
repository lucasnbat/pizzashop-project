import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
    // navega para sign-up e espera tudo de req carregar o conteudo da pag
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Nome do estabelecimento').fill('Pizza shop')
    await page.getByLabel('Seu nome').fill('John Doe')
    await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
    await page.getByLabel('Seu celular').fill('66988775599')

    page.getByRole('button', { name: 'Finalizar cadastro' }).click()

    const toast = page.getByText('Restaurante cadastrado com sucesso')

    expect(toast).toBeVisible()

    // delay para prolongar o teste para aparecer o final (bug do playwritght)
    await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
    // navega para sign-up e espera tudo de req carregar o conteudo da pag
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Nome do estabelecimento').fill('Tchain shop')
    await page.getByLabel('Seu nome').fill('John Doe')
    await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
    await page.getByLabel('Seu celular').fill('66988775599')

    page.getByRole('button', { name: 'Finalizar cadastro' }).click()

    const toast = page.getByText('Erro ao cadastrar restaurante')
    expect(toast).toBeVisible()
    // delay para prolongar o teste para aparecer o final (bug do playwritght)
    // await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByRole('link', { name: 'Fazer login' }).click()

    expect(page.url()).toContain('/sign-in')
})