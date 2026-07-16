function WebhookCard({ webhook, onSelect }) {
  return (
    <div
      onClick={() => onSelect(webhook)}
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      <h4>{webhook.method}</h4>

      <p>
        <strong>Time:</strong>{" "}
        {new Date(webhook.createdAt).toLocaleString()}
      </p>

      <p>
        <strong>IP:</strong> {webhook.ip}
      </p>
    </div>
  );
}

export default WebhookCard;