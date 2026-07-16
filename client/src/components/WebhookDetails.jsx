function WebhookDetails({ webhook }) {
  if (!webhook) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <h2>Webhook Details</h2>

      <p>
        <strong>Method:</strong> {webhook.method}
      </p>

      <p>
        <strong>IP:</strong> {webhook.ip}
      </p>

      <p>
        <strong>User Agent:</strong> {webhook.userAgent}
      </p>

      <h3>Headers</h3>

      <pre>{JSON.stringify(webhook.headers, null, 2)}</pre>

      <h3>Body</h3>

      <pre>{JSON.stringify(webhook.body, null, 2)}</pre>

      <h3>Query</h3>

      <pre>{JSON.stringify(webhook.query, null, 2)}</pre>
    </div>
  );
}

export default WebhookDetails;