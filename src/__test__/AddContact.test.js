import { render,screen } from "@testing-library/react";
import AddContact from "../components/AddContact"

test("checking the add contact button", async ()=>{
    
    const comp = render(<AddContact/>);
    const btn =  await comp.findAllByRole("button")
    
    expect(btn).toHaveLength(1)
    
})
test("checking the add contact h2 tag",()=>{
    render(<AddContact/>)
    const heading = screen.getByText(/Add Contact/i)
    expect(heading).toBeTruthy()
})
test("checking the Name text field",()=>{
    render(<AddContact/>)
    const nameField= screen.getByPlaceholderText(/Enter Name/)
    expect(nameField).toBeTruthy()
})