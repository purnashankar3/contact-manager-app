import { render,screen } from "@testing-library/react";
import ContactList from "../components/ContactList";

describe("checking the ContactList component",()=>{
    it("checking the button", async ()=>{
        render(<ContactList/>)
        const element = await screen.getAllByRole("Link")
        expect(element).toHaveLength(1)

    })
})
