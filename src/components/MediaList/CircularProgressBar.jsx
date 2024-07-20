const CircularProgressBar = ({
  vote_average = 0,
  size = 2,
  strokeWidth = 0.2,
}) => {

  const radius = size / 2 - strokeWidth;
  const perimeter = 2 * Math.PI * radius;
  const transO = size / 2;

  const percent = Math.round(vote_average * 10);

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${transO}vw`} // dịch chuyển gốc O
          cy={`${transO}vw`}
          stroke="white" // màu viền
          strokeWidth={`${strokeWidth}vw`}
        />
        {/* Vẽ đè */}
        <circle
          r={`${radius}vw`}
          cx={`${transO}vw`}
          cy={`${transO}vw`}
          stroke={percent >= 75 ? "green" : percent >= 50 ? "orange" : "red"}
          fill="none" // bỏ màu ở tâm
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${perimeter}vw`} // chiều dài
          strokeDashoffset={`${perimeter - (percent / 100) * perimeter}vw`} // phần lùi
          transform="rotate(-90)" // xoay trục (gốc Base) => khiến cho trục bị xoay lên trên
          style={{ transformOrigin: "center" }} // đặt gốc xoay về tâm mới (không phải từ gốc Base)
          strokeLinecap="round" // làm tròn đầu mút
        />
        <text
          x={`${transO}vw`} // dịch chuyển gốc O
          y={`${transO + 0.08}vw`}
          textAnchor="middle" // căn chữ giữa theo chiều ngang
          alignmentBaseline="middle" // căn chữ giữa theo chiều dọc
          fill="white"
          fontSize="0.75vw"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
