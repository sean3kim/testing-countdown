import { fireEvent, render, screen, act } from "@testing-library/react";
import NewTimer from "../NewTimer";

describe("timer functionality", () => {

    it("should have all the relevant components", () => {
        render(<NewTimer />);
        const startButton = screen.getByText(/start/i);
        const hour = screen.getByLabelText(/hours/i);
        const minute = screen.getByLabelText(/minutes/i);
        const second = screen.getByLabelText(/seconds/i);
        expect(startButton).toBeInTheDocument();
        expect(hour).toBeInTheDocument();
        expect(minute).toBeInTheDocument();
        expect(second).toBeInTheDocument();
    })

    it("should update text fields with the correct hours/minutes/seconds", () => {
        render(<NewTimer />);
        const hourField = screen.getByLabelText(/hours/i);
        const minuteField = screen.getByLabelText(/minutes/i);
        const secondField = screen.getByLabelText(/seconds/i);
        fireEvent.change(hourField, { target: { value: 5 } });
        fireEvent.change(minuteField, { target: { value: 10 } });
        fireEvent.change(secondField, { target: { value: 100 } });
        expect(hourField.value).toBe("5");
        expect(minuteField.value).toBe("10");
        expect(secondField.value).toBe("100");
    })

    it("should decrease the second by 1 after a 1 second delay", async () => {
        render(<NewTimer />);
        const secondField = screen.getByLabelText(/seconds/i);
        const button = screen.getByText(/start/i);
        const timeText = screen.getByRole("heading");
        fireEvent.change(secondField, { target: { value: 5 } });
        fireEvent.click(button)
        await act(async () => await new Promise((r) => setTimeout(r, 1000)));
        expect(timeText.innerHTML).toBe("00:00:04")
    })
})