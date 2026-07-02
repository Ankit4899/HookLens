import { useState } from "react";
import { createEndpoint } from "../services/endpoint.service";

function CreateEndpoint({ refreshEndpoints }) {
  const [formData, setFormData] = useState({
    name: "",
    provider: "custom",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEndpoint(formData);

      alert("Endpoint Created");

      setFormData({
        name: "",
        provider: "custom",
        description: "",
      });

      refreshEndpoints();
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Endpoint</h2>

      <input
        type="text"
        name="name"
        placeholder="Endpoint Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <br />
      <br />

      <select
        name="provider"
        value={formData.provider}
        onChange={handleChange}
      >
        <option value="custom">Custom</option>
        <option value="stripe">Stripe</option>
        <option value="github">GitHub</option>
        <option value="razorpay">Razorpay</option>
        <option value="clerk">Clerk</option>
        <option value="resend">Resend</option>
      </select>

      <br />
      <br />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br />
      <br />

      <button>Create Endpoint</button>
    </form>
  );
}

export default CreateEndpoint;