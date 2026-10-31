# QR 이미지 형식 (고정 · 2026-10-31 v2.0 A안 「현무암 밤」 확정, 수정 금지)

사용자 지시: "앞으로 QR코드 이미지의 형식은 절대 수정하지 말고 픽스해" (2026-10-23 21:09 KST)
사장님 승인: "a가 제일 그나마 좋네... a로 정하고 적용하자" (2026-10-31 20:51 KST) → 손님 전송용 이미지를 A안으로 교체
이 폴더의 파일이 기준본이다. 디자인·문구·색·크기·배치를 바꾸지 않는다.
연결 주소가 바뀌는 등 꼭 다시 만들어야 할 때도 QR 무늬 외에는 그대로 두고, 사용자 승인을 먼저 받는다.

## 1. 손님 전송용 QR 이미지 — biroso433_GuestGuide_QR.png (v2.0)
- 크기: 1080×1350 px, PNG (assets/biroso433_GuestGuide_QR.png 도 같은 파일)
- 배경 #20241f(현무암 밤), 글자 #f1ebdc, 보조 글자 #c9c3b1, 강조 #c3d391, QR 카드 #f4efe2
- 글꼴
  - 제목 "Guest Guide"·주소: Fraunces (제목 112px 500, 주소 56px 600, 주소는 강조색)
  - 부제 "이용안내 · 入住指南 · ご利用案内": Noto Serif CJK (KR / SC / JP), 30px
  - 브랜드 줄: Noto Sans CJK KR / 안내 2줄: Gowun Batang 26px
- 위에서부터: 손그림 아이콘(둥근 모서리) + "BIROSO 433" / "비로소4'33''"
  → 제목 "Guest Guide" → 부제
  → 크림색 카드(테두리 없음) 안 QR
  → "biroso433.com" → 안내 2줄 "카메라로 QR코드를 비추거나 주소를 입력해 주세요 / Scan the QR code or type the address above"
- 원본 HTML: guest-card-source.html (위 글꼴이 설치된 환경에서 1080×1350으로 렌더링하면 기준 PNG와 픽셀 동일)
- 글자 대비: 모두 WCAG 4.5:1 이상
- 이전 기준본(v1.0, 2026-10-23, 밝은 배경 #ecebe1): archive/v1.0_20261023/

## 2. 출력용 A5 안내문 — Guest_Guide_QR_A5_biroso433com.jpg (변경 없음)
- A5 148×210mm, 300dpi, 1748×2480 px, JPG 품질 95
- 배경 #ecebe1, 제목 "Guest Guide"(먹색 #1d1f15), 흰 카드 안 QR, 가운데 정렬, 그 외 요소 없음
- Claude 디자인 캔버스 "비로소433 객실 QR 안내문" 버전 5와 같은 형식
- 손님 전송용 A안과 맞출지는 사장님 결정 대기

## QR코드 자체
- 내용: https://biroso433.com/
- 오류 보정 Q, 버전 3 (29×29), 먹색 #1d1f15, qr.svg
