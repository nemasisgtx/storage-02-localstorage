import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
    test('render posts if request succeeds', async () => {
        // ARRANGE
        render(<Async />);
        
        //ACT
        
        // ASSERT
        const listChecker = await screen.findAllByRole("listitem");
        expect(listChecker).not.toHaveLength(0);
    });
});