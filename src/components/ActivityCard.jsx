import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity, participants, onRemoveParticipant }) => {
  return (
    <div className="activity-card">
      {/* ...existing card content... */}
      <div className="participants-section">
        <h4>Participantes</h4>
        {participants && participants.length > 0 ? (
          <ul className="participants-list no-bullets">
            {participants.map((name, idx) => (
              <li key={idx} className="participant-item">
                <span>{name}</span>
                <button
                  className="delete-participant-btn"
                  title="Remover participante"
                  onClick={() => onRemoveParticipant && onRemoveParticipant(activity, name)}
                  aria-label={`Remover ${name}`}
                >
                  &#10006;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-participants">Nenhum participante inscrito ainda.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;