interface PaginationDotsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

function PaginationDots({ total, active, onChange }: PaginationDotsProps) {
  return (
    <div
      role="group"
      aria-label="Slide-navigation"
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: total === 6 ? "10px" : "0",
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Gå til slide ${i + 1}`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => onChange(i)}
          style={{
            width: i === active ? "14px" : "10px",
            height: i === active ? "14px" : "10px",
            borderRadius: "50%",
            backgroundColor: i === active ? "#222" : "#bbb",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.2s ease",

          }}
        />
      ))}
    </div>
  );
}

export default PaginationDots;