import { render } from "@testing-library/react";
import { Message } from "../index";

describe('Message', () => {
    it('matches snapshot', () => {
        const message = render(<Message />);

        expect(message).toMatchSnapshot()
    })
})
