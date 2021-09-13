import * as yup from "yup";

export const empSchema = yup.object().shape({
	name: yup.string().required(),
	pan: yup
		.string()
		.required()
		.matches(/^[0-9]+$/)
		.max(10)
		.test("Unique", "Pan need te be unique", (value, propertyName) => {
			if (!value || !value[propertyName]) {
				return true;
			}
		}),
	age: yup.number().required().min(1).max(100).positive().integer(),
	gender: yup.string().required(),
	email: yup
		.string()
		.email()
		.required()
		.test("Unique", "Email need te be unique", (value, propertyName) => {
			if (!value || !value[propertyName]) {
				return true;
			}
		}),
	city: yup.string().required(),
});
