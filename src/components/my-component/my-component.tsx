import { useState } from "react";
import "./my-component.css";

type OnboardingFormField = {
  name: string;
  label: string;
  format: "country" | "string" | "url";
};

export type OnboardingForm = {
  formTitle: string;
  fields: OnboardingFormField[];
};

// send data as props to the component

interface MyComponentProps {
  formData: OnboardingForm;
}

export function MyComponent({ formData }: MyComponentProps) {
  const { formTitle, fields } = formData;
  // iterate over the array and create the form

  const buildFormData = (): Record<string, string> => {
    return fields.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: "",
      };
    }, {});
  };

  // state management
  const [formState, setFormState] =
    useState<Record<string, string>>(buildFormData());

  const [error, setError] = useState<null | string>(null);

  const validateForm = (): boolean => {
    let failsValidation = false;
    const itemsToValidate = Object.keys(formState);
    itemsToValidate.forEach((key) => {
      const format = fields.find((field) => field.name === key)?.format;
      if (format === "string") {
        const value = formState[key];
        if (value === "") {
          failsValidation = true;
        }
      }
      if (format === "url") {
        const value = formState[key];
        if (value === "" || !value.startsWith("http/https")) {
          failsValidation = true;
        }
      }
    });
    return failsValidation;
  };

  console.log(formState);

  return (
    <div className="myComponent">
      <form
        className="formContent"
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          console.log("attempts validations");

          const failsValidation = validateForm();
          if (failsValidation) {
            setError("Missing field");
          }
          // do validation
        }}
      >
        <h1>{formTitle}</h1>
        {fields.map((field) => {
          if (field.format === "string") {
            return (
              <label htmlFor={field.name}>
                {field.label}
                <input
                  id={field.name}
                  value={formState[field.name]}
                  onChange={(e) => {
                    setFormState((prev) => {
                      return {
                        ...prev,
                        [field.name]: e.target.value,
                      };
                    });
                  }}
                />
              </label>
            );
          }
          if (field.format === "country") {
            return (
              <label htmlFor={field.name}>
                {field.label}
                <select
                  name="country"
                  id={field.name}
                  onChange={(e) => {
                    setFormState((prev) => {
                      return {
                        ...prev,
                        [field.name]: e.target.value,
                      };
                    });
                  }}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="US">US</option>
                  <option value="Canada">Canada</option>
                </select>
              </label>
            );
          }
          if (field.format === "url") {
            return (
              <label htmlFor={field.name}>
                {field.label}
                <input
                  id={field.name}
                  value={formState[field.name]}
                  onChange={(e) => {
                    setFormState((prev) => {
                      return {
                        ...prev,
                        [field.name]: e.target.value,
                      };
                    });
                  }}
                />
              </label>
            );
          }
        })}
        {error && <span>{error}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
