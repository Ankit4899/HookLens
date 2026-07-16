import { useEffect, useState } from "react";
import { getWebhookHistory } from "../services/webhook.service";
import WebhookCard from "./WebhookCard.jsx";

function WebhookList({ endpointId, onSelect }) {
  const [webhooks, setWebhooks] = useState([]);

  const loadWebhooks = async () => {
    try {
      const res = await getWebhookHistory(endpointId);
      setWebhooks(res.webhooks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!endpointId) return;

    loadWebhooks();

    // Auto refresh every 5 seconds
    const interval = setInterval(() => {
      loadWebhooks();
    }, 5000);

    return () => clearInterval(interval);
  }, [endpointId]);

  if (!endpointId) {
    return <p>Select an endpoint first.</p>;
  }

  return (
    <div>
      <h2>Webhook History</h2>

      {webhooks.length === 0 ? (
        <p>No webhooks received yet.</p>
      ) : (
        webhooks.map((webhook) => (
          <WebhookCard
            key={webhook._id}
            webhook={webhook}
            onSelect={onSelect}
          />
        ))
      )}
    </div>
  );
}

export default WebhookList;