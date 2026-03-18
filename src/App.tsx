import "./App.css";
import { MyComponent } from "./components/my-component";
import type { OnboardingForm } from "./components/my-component/my-component";

function App() {
  const dummyData: OnboardingForm = {
    formTitle: "Business information",
    fields: [
      { name: "country", label: "Country", format: "country" },
      { name: "businessName", label: "Business name", format: "string" },
      { name: "businessUrl", label: "Business URL", format: "url" }
    ],
  };

  return (
    <div className="app">
      <MyComponent formData={dummyData} />
    </div>
  );
}

export default App;
