import {
  deleteEndpoint,
  toggleEndpoint,
} from "../services/endpoint.service";

function EndpointCard({ endpoint, refreshEndpoints }) {
  const webhookUrl = `http://localhost:5000/api/webhooks/${endpoint.path}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(webhookUrl);
    alert("Copied");
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete endpoint?")) return;

    await deleteEndpoint(endpoint._id);

    refreshEndpoints();
  };

  const handleToggle = async () => {
    await toggleEndpoint(endpoint._id);

    refreshEndpoints();
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>{endpoint.name}</h3>

      <p>{endpoint.provider}</p>

      <p>{endpoint.description}</p>

      <p>{endpoint.active ? "🟢 Active" : "🔴 Disabled"}</p>

      <input
        value={webhookUrl}
        readOnly
        style={{ width: "100%" }}
      />

      <br />
      <br />

      <button onClick={handleCopy}>
        Copy URL
      </button>

      <button
        onClick={handleToggle}
        style={{ marginLeft: "10px" }}
      >
        {endpoint.active ? "Disable" : "Enable"}
      </button>

      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default EndpointCard;