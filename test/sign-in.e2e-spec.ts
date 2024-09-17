import { expect, test } from '@playwright/test'

/**
 * Para não precisar colocar o timeout nos casos de toBeVisible()
 * você pode só colocar um await antes para que o playwright aguardar o expect
 * Sempre que houver um evento aguardando algo aparecer em tela, você pode testar
 * essa solução;
 */

test('sign in successfully', async ({ page }) => {
    // navega para sign-in e espera tudo de req carregar o conteudo da pag
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    // use page + métodos que vc encontrar com o @ da ui do playwright
    await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
    await page.getByRole('button', { name: 'Acessar painel' }).click()

    const toast = page.getByText('Enviamos um link de autenticação para seu e-mail')

    await expect(toast).toBeVisible()

    // delay para prolongar o teste para aparecer o final (bug do playwritght)
    // await page.waitForTimeout(2000)
})

test('sign in with wrong credentials is not possible', async ({ page }) => {
    // navega para sign-in e espera tudo de req carregar o conteudo da pag
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    // use page + métodos que vc encontrar com o @ da ui do playwright
    await page.getByLabel('Seu e-mail').fill('wrong@example.com')
    await page.getByRole('button', { name: 'Acessar painel' }).click()

    const toast = page.getByText('Credenciais inválidas')

    expect(toast).toBeVisible()

    // delay para prolongar o teste para aparecer o final (bug do playwritght)
    await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

    expect(page.url()).toContain('/sign-up')
})

