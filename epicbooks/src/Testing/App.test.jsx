import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

test("verifica componente welcome", () => {

    render(<App />)
    const welcomeElement =
        screen.getByText(/welcome epicbooker/i)

    expect(welcomeElement).toBeInTheDocument()

})

test("verifica commentArea", async () => {

    render(<App />)
    const selectButtons =
        screen.getAllByText(/seleziona/i)
    await userEvent.click(selectButtons[0])
    const commentArea =
        screen.getByTestId("commentArea")

    expect(commentArea)
        .toBeInTheDocument()

})

test("verifica che il bordo cambi colore", async () => {

    render(<App />)
    const selectButtons =
        screen.getAllByText(/seleziona/i)
    await userEvent.click(selectButtons[0])
    const booksCards =
        screen.getAllByTestId("bookCard")

    expect(booksCards[0])
        .toHaveStyle({
            borderColor: "rgb(0, 255, 255)"
        })

})

test("verifica che si levi il colore del libro selezionato, quando ne seleziono un altro", async () => {

    render(<App />)
    const selectButtons =
        screen.getAllByText(/seleziona/i)
    const booksCards =
        screen.getAllByTestId("bookCard")
    await userEvent.click(selectButtons[0])
    await userEvent.click(selectButtons[1])

    expect(booksCards[0])
        .not.toHaveStyle(
            "border-color: rgb(0, 255, 255)"
        )

})

test("verifica all avvio non ci siamo istante di singleComment", () => {

    render(<App />)
    const singleComment =
        screen.queryByTestId("singleComment")

    expect(singleComment)
        .not.toBeInTheDocument()

})

test("verifica che le recensioni vengano caricate correttamente", async () => {

    render(<App />)
    const selectButtons =
        screen.getAllByText(/seleziona/i)
    await userEvent.click(selectButtons[0])

    const singleComment =
        await screen.findByTestId("singleComment")

    expect(singleComment)
        .toBeInTheDocument()

})