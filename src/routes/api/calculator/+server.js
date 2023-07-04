import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { firstValue, secondValue, operation } = await request.json();
    switch (operation) {
        case "+":
            return json(parseFloat(firstValue) + parseFloat(secondValue))
        case "-":
            return json(parseFloat(firstValue) - parseFloat(secondValue))
        case "*":
            return json(parseFloat(firstValue) * parseFloat(secondValue))
        case "/":
            return json(parseFloat(firstValue) / parseFloat(secondValue))
        default:
            return json("Error in Operation")
    }
}