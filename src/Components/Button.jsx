export default function Button({ label, primary }) {
  return (
    <button
      style={{
        background: primary ? '#1EA7FD' : '#EEE',
        color: primary ? 'white' : 'black',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}