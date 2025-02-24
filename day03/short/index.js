// 유저에게 닉네임을 입력받고
// [닉네임]님 환영합니다! alert으로 나타내기
// 대신에 아무것도 입력하지 않으면
// Guest님 환영합니다! alert으로 나타내기
const name = prompt("닉네임 입력: ");
const nick_name = name || "Guest";
alert(`${nick_name}님 환영합니다!`);

// 유저에게 비밀번호를 입력 받고
// 비밀번호가 1024이면 alert으로 화장실 열림!
// 틀리면 아무것도 안일어나기
const password = Number(prompt("비밀번호 입력: "));
password === 1024 ? alert(`화장실 열림!`) : "";
