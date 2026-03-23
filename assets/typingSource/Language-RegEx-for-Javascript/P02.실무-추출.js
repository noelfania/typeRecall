// ============================================================
// P02. JavaScript용 정규식 실무 추출 패턴
// ============================================================

// 파일 확장자[extension] 앞까지
'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];
// 결과: abc/def/video.

// 숫자와 mp4 사이 텍스트 추출
'123테스트.mp4'.match(/\d+(.*?)\.mp4/)[1];
// 결과: 테스트

// 여러 줄 함수 호출 찾기
var fnSource = `functionAAAAA(a,
  b,
  c)`;
fnSource.match(/functionAAAAA\([\s\S]*?\)/)[0];
// 결과:
// functionAAAAA(a,
//   b,
//   c)

// key=value 추출
var logText = 'A=111,B=222,C=333';
Array.from(logText.matchAll(/(\w+)=(\d+)/g), item => ({
  key: item[1],
  value: item[2],
}));
// 결과:
// [{ key:'A', value:'111' }, { key:'B', value:'222' }, { key:'C', value:'333' }]

// 태그 안 내용 추출
'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\/title>)/)[0];
// 결과: Hello
