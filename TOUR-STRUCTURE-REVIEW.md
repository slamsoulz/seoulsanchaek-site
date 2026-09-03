# Tour Structure Review Draft

검토용 문서입니다. 사이트 코드와 투어 콘텐츠에는 적용하지 않았고, 공개 배포하지 않습니다.

## 공통 제안 화면

모든 상세 페이지는 아래 순서로 통일합니다.

1. Hero: 카테고리 → 제목 → 한 줄 소개 → 대표 이미지 → `Duration`
2. Price card: 가격 행, 가격 단위, 인원 조건, `Check Availability` 또는 `Get an Exact Quote`
3. `Trip Info`
4. `Overview`
5. `Highlights`
6. `Itinerary` 또는 당일 상품의 `Typical Route`
7. `Cost`
   - `The cost includes`
   - `The cost excludes`
   - `Additional costs / conditions`
8. `FAQs`
9. 문의 CTA

가격 카드의 표기 원칙:

- 고정가는 `$175 / Adult`, `$150 / Child`처럼 가격 단위를 함께 표시합니다.
- 기존 단기 상품은 `per guest`, `per person`, `per private group`을 그대로 보존합니다.
- 맞춤 상품은 임의의 시작 가격을 만들지 않고 `Custom quote`로 표시합니다.
- 가격 카드의 행과 Cost 섹션의 조건은 같은 표현을 사용합니다.

---

## 1. Airport Transfer — 기존 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Airport`
- 제목: `Airport Transfer`
- 소개: `Pickup or drop-off between the airport and your hotel — no touring included.`
- 가격 카드:
  - `Seoul` — `$60`
  - `Metro Area` — `$70`
  - `Other` — `Quote on request`
- 인원: `Up to 3 guests, depending on luggage · inquire to confirm`
- 본문: 공항과 호텔 간 편도 이동이며 투어는 포함하지 않음.
- Trip Info: 현재 별도 Trip Info 섹션 없음.
- Cost성 안내: `driver, vehicle, one-way transfer` 포함; 추가 인원과 수하물 조건 안내.
- FAQ: 차량 인원, 공항 미팅, Gimpo Airport, 수하물, 연료·톨 관련 질문이 있음.

### B. 통일 후 제안 화면

**Price card**

| Area | Duration | Price |
|---|---|---:|
| Seoul | One-way transfer | `$60` |
| Metro Area | One-way transfer | `$70` |
| Other areas | One-way transfer | `Custom quote` |

카드 하단 문구:

> Up to 3 guests, depending on luggage. Please inquire with your group size and number of bags before booking.

버튼: `Get an Exact Quote`

**Trip Info**

- 🚗 Transportation — Private vehicle with driver
- 🧳 Luggage — Capacity depends on the number and size of bags
- 📍 Departure / Arrival — Incheon or Gimpo Airport and agreed destination
- 🕐 Duration — One-way transfer; exact drive time depends on route
- 👥 Group size — Up to 3 guests, luggage permitting

**Cost**

`The cost includes`

- Driver
- Vehicle
- One-way airport transfer

`The cost excludes / may change`

- Personal purchases and meals
- Additional guest surcharge, if applicable
- Other-area routes quoted separately
- Three guests may not be possible with substantial luggage

**FAQ 추가·이동**

- 기존 수하물/공항 미팅 FAQ는 유지합니다.
- 가격 관련 질문을 추가합니다: `Is the price for one way or round trip?`
- 답변: `The listed price is for a one-way transfer. Please inquire if you need a round trip or multiple stops.`

### C. 그대로 유지

- Seoul `$60`, Metro Area `$70`, Other `Quote on request`
- 대형 수하물이 있으면 3인 탑승이 불가능할 수 있다는 조건
- Incheon/Gimpo Airport 대응
- 공항 이동만 제공하고 관광은 포함하지 않는 상품 성격

### D. 사용자 결정 필요

- `Duration`을 `One-way transfer`로 확정할지, 예상 시간 범위를 표시할지
- 추가 인원 surcharge의 실제 금액
- 왕복·다중 경유 제공 여부
- Trip Info에 운전기사 이름/차량 차종을 공개할지

---

## 2. Walking & Transit Tour — 기존 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Walking & Transit`
- 제목: `Walking & Transit Tour`
- 소개: `No car — same personal guide, moving by subway and bus. Pick half day or full day.`
- 가격 카드:
  - `Half Day / 4 hours` — `$100 · 1 guest`
  - `Half Day / 4 hours` — `$70/person · 2–9 guests`
  - `Additional time / After 4 hours` — `$20/person/hour · all group sizes`
- 인원: `1–9 people · 10+ by inquiry`
- 본문: 지하철·버스·도보 이동, 개인 식사·교통비·입장료 별도.
- Trip Info: 현재 별도 Trip Info 섹션 없음.
- FAQ: 명소, 일정 변경, 추가 시간, 교통·입장료, 이동성, 10인 이상 문의.

### B. 통일 후 제안 화면

**Price card**

| Option | Duration | Price |
|---|---|---:|
| Solo | 4 hours | `$100 · per guest` |
| Small group | 4 hours | `$70 · per person · 2–9 guests` |
| Additional time | After 4 hours | `$20 · per person per hour · all group sizes` |
| Large group | 10+ guests | `Custom quote` |

카드 하단 문구:

> The 4-hour base price is different for solo guests and groups of 2–9. Groups of 10 or more require an inquiry.

버튼: `Get an Exact Quote`

**Trip Info**

- 🚶 Transportation — Walking, subway, and bus
- ⏱️ Duration — 4-hour base; additional time available
- 📍 Meeting point — Agreed Seoul meeting point
- 👥 Group size — 1–9 guests; 10+ by inquiry
- 🗺️ Tour type — Private walking and transit tour
- 🧭 Fitness level — Easy to moderate; stairs and uneven streets may occur

**Cost**

`The cost includes`

- Personal guide
- Route planning and on-site briefing

`The cost excludes`

- Guest transit fares
- Admission fees
- Personal meals and purchases

`Additional costs / conditions`

- Additional time: `$20 per person per hour` for all group sizes
- Groups of 10 or more: inquiry required
- Route accessibility depends on stations, stairs, and street conditions

**FAQ 추가·이동**

- 기존 명소 목록에 `Hangang Parks`를 유지합니다.
- 가격 FAQ를 추가합니다: `How is the walking tour priced?`
- 답변: `The 4-hour tour is $100 for one guest or $70 per person for groups of 2–9. Additional time is $20 per person per hour for all group sizes.`
- 기존 `What happens if we want more than 4 hours?`는 위 단일 추가시간 정책과 같은 문장으로 정리합니다.

### C. 그대로 유지

- 1인 `$100`
- 2–9인 `$70/person`
- 추가 시간 `$20/person/hour`
- 10인 이상 문의
- 한강공원, 경복궁, 광화문, 청계천, 명동, DDP 등 관심사 기반 명소
- 교통비·입장료·식사 별도

### D. 사용자 결정 필요

- `Meeting point`를 서울 내 협의 장소로 고정할지
- 아동 가격을 만들지
- 최소·최대 연령을 명시할지
- 기존 4시간 상품을 `Half Day`로 부를지 `4-hour tour`로 부를지

---

## 3. Private Car Tour — 기존 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Private Car`
- 제목: `Private Car Tour`
- 소개: `A private car and personal guide. Pick half day, standard, or a full day — including trips like the DMZ.`
- 가격 카드:
  - `Half Day / 4 hours` — `$300 · per private group`
  - `Standard / 5–7 hours` — `$500 · per private group`
  - `Full Day / 8–10 hours` — `$650 · per private group`
- 인원: `Private group pricing · 4+ or substantial luggage by inquiry`
- 본문: 코스 맞춤, Seoul/Gimpo/Paju 권역 조건, 외곽·추가 시간은 견적.
- Trip Info: 현재 별도 Trip Info 섹션 없음.
- FAQ: 그룹 단가, 4인 이상, 수하물, 맞춤 코스, 서울 외 지역, 연료·톨·주차·입장료.

### B. 통일 후 제안 화면

**Price card**

| Option | Duration | Price |
|---|---|---:|
| Half Day | 4 hours | `$300 · per private group` |
| Standard | 5–7 hours | `$500 · per private group` |
| Full Day | 8–10 hours | `$650 · per private group` |
| Custom Korea Road Trip | Multi-day | `Custom quote` |

카드 하단 문구:

> Prices are per private group. Groups of 4 or more, substantial luggage, and destinations outside the Seoul metro area require an inquiry.

버튼: `Get an Exact Quote`

**Trip Info**

- 🚗 Transportation — Private car with personal guide
- ⏱️ Duration — 4 hours, 5–7 hours, or 8–10 hours
- 📍 Service area — Seoul, Gimpo, Paju, and agreed destinations
- 👥 Group size — Private group; 4+ by inquiry
- 🧳 Luggage — Please confirm group size and number of bags
- 🗺️ Tour type — Custom private car tour

**Cost**

`The cost includes`

- Vehicle and guide
- Fuel, tolls, and listed admission within the Seoul metro area

`The cost excludes / may change`

- Personal meals and purchases
- Admission outside the Seoul metro area
- Additional hours
- Parking, fuel, tolls, vehicle, or driver arrangements for custom routes when applicable

`Custom Korea Road Trip`

> Busan, Jeju, Jeonju, Daegu, Gyeongju, Gangneung, and multi-city routes are available by inquiry. Three-city and five-city itineraries are quoted individually.

**FAQ 추가·이동**

- 기존 수하물 FAQ를 가격 카드 바로 아래의 조건과 같은 문장으로 유지합니다.
- `Can groups of 4 or more join?` 답변에 차량·운영 조건 확인 후 견적이 달라질 수 있음을 명시합니다.
- `Are fuel, tolls, parking, and admission fees included?`를 Cost 섹션과 동일한 범위로 맞춥니다.

### C. 그대로 유지

- `$300 / $500 / $650`의 private group 가격
- 4시간·5–7시간·8–10시간 구간
- 수하물이 많으면 문의 필요
- 4인 이상은 차량·운영 조건 확인 필요
- Custom Korea Road Trip은 별도 견적
- Busan, Jeju, Jeonju, Daegu, Gyeongju, Gangneung 등 목적지명

### D. 사용자 결정 필요

- 서울권 포함 범위를 Seoul/Gimpo/Paju로 최종 확정할지
- 외곽 지역에서 입장료·주차·톨·연료를 어떤 방식으로 청구할지
- 4인 이상 대체 차량 운영 문구를 어느 수준까지 공개할지
- Custom Korea Road Trip에 숙박·식사·국내선 포함 여부

---

## 4. 4D Private Seoul Highlights with DMZ / Nami Island — 추가 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Multi-Day Private Tour`
- 제목: `4D Private Seoul Highlights with DMZ / Nami Island`
- Duration: `4 days · 3 nights`
- 가격: `Adult $1,900`, `Child $1,800`
- 인원: `3–25 guests`
- Trip Info: Private bus, 3-star hotels, Seoul 출발, Spring and autumn, Eco-tour/Hiking/Family tour, all meals, English/Korean, Easy to moderate, 최소 12세·최대 75세.
- Overview, Highlights, Cost, FAQ 있음.
- Itinerary라는 제목 대신 Highlights 안에 Day 1–4가 들어 있음.

### B. 통일 후 제안 화면

**Price card**

| Passenger | Duration | Price |
|---|---|---:|
| Adult | 4 days · 3 nights | `$1,900` |
| Child | 4 days · 3 nights | `$1,800` |

버튼: `Check Availability`

**섹션 순서**

`Trip Info → Overview → Highlights → Itinerary → Cost → FAQs → Check Availability`

**Itinerary 제목으로 이동할 문구**

- Day 1 — Arrival & Gapyeong: Incheon Airport pickup, Nami Island, Petite France
- Day 2 — Seoul: Gyeongbokgung Palace, hanbok experience, Gwanghwamun Square, N Seoul Tower
- Day 3 — Everland: Full-day theme park visit
- Day 4 — DMZ: Subject to military, weather, and operational conditions

**Cost 문구**

`The cost includes`

- Private transportation
- English-speaking guide
- 3 nights’ accommodation in Seoul
- Daily breakfast
- Listed attraction admission fees

`The cost excludes`

- International airfare
- Travel insurance
- Personal expenses, tips, optional activities, and items not listed in the quote

### C. 그대로 유지

- Adult `$1,900`, Child `$1,800`
- 4일 3박
- DMZ·Nami Island·Everland·Seoul 구성
- 3–25명, 최소 12세·최대 75세
- DMZ가 상황에 따라 취소될 수 있다는 조건

### D. 사용자 결정 필요

- 실제 숙박이 3박인지, 원문에 있던 “4-day 5-night” 표현을 완전히 폐기할지
- 모든 식사가 포함인지, 현재 콘텐츠의 `daily breakfast`와 통일할지
- 아동 연령 기준
- `Check Availability`가 실제 예약 가능 확인인지, 문의 폼 이동인지

---

## 5. Seoul Full Day Tour — 추가 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Full-Day Walking Tour`
- 제목: `Seoul Full Day Tour`
- Duration: `1 day`
- 가격: `Adult $175`, `Child $150`
- 인원: `2–15 guests`
- Trip Info: Metro and walking, Incheon Airport 출발, February–May, City tour and light hiking, English, Easy to moderate, 최소 12세·최대 65세.
- Overview, Highlights, Cost, FAQ 있음.
- Highlights: 경복궁, 광화문, 청계천, 명동, DDP, N서울타워, 남산공원, 북촌, 인사동, COEX Library, 봉은사, 강남.

### B. 통일 후 제안 화면

이 상품은 기존 Walking & Transit와 중복 가능성이 있으므로, 아래는 **별도 유지할 때의 시안**입니다.

**Price card**

| Passenger | Duration | Price |
|---|---|---:|
| Adult | 1 day | `$175` |
| Child | 1 day | `$150` |

카드 하단 문구:

> Private full-day Seoul tour by metro and walking. 2–15 guests.

버튼: `Check Availability`

**Trip Info 추가 필드**

- 🚇 Transportation — Metro and walking
- 📍 Departure — Incheon International Airport
- ⏱️ Duration — Full day; exact start and finish coordinated with the itinerary
- 👥 Group size — 2–15 guests
- 🎟️ Admission — Listed admission fees included
- 🧳 Luggage — Airport storage may be available at additional cost

**Cost**

`The cost includes`

- Guide and planned metro route
- Guide’s transportation and insurance
- Listed admission fees

`The cost excludes`

- Food and drinks
- Souvenirs and personal expenses
- International airfare, visa fees, and travel insurance

**FAQ**

- 기존 private tour, 소요 시간, 일정 변경, 수하물, 접근성 FAQ 유지
- `Is this the same as Walking & Transit Tour?`를 추가할지 사용자 결정 필요

### C. 그대로 유지

- Adult `$175`, Child `$150`
- 1일, 2–15명
- 공항 출발·지하철·도보 방식
- 기재된 주요 명소와 Cost 포함/제외 항목

### D. 사용자 결정 필요

- 기존 Walking & Transit와 별도 상품으로 유지할지
- 출발지를 반드시 Incheon Airport로 할지
- 아동 가격의 연령 범위
- 1일의 실제 최대 시간
- “Full Day”와 기존 4시간+추가시간 가격의 관계

---

## 6. Seoul Night Tour — 추가 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Night Tour`
- 제목: `Seoul Night Tour`
- Duration: `1 day · evening`
- 가격: `Custom quote`
- 인원: `2–15 guests`
- Trip Info: Metro and walking, Seoul 또는 협의된 픽업 장소, City tour and evening walk, English, Easy to moderate.
- Overview, Highlights, Cost, FAQ 있음.
- Highlights: 봉은사·COEX Starfield Library, 강남, DDP, 명동 음식·쇼핑 거리.
- Cost: 기간·인원·미팅 장소·교통·식사·입장료에 따라 견적.

### B. 통일 후 제안 화면

**Price card**

| Option | Duration | Price |
|---|---|---:|
| Private evening tour | Evening · duration by inquiry | `Custom quote` |

카드 하단 문구:

> Tell us your preferred start time, neighborhoods, group size, and food interests.

버튼: `Get an Exact Quote`

**Trip Info 추가 필드**

- 🌙 Tour time — Evening; exact start time by arrangement
- 🚇 Transportation — Metro and walking
- 📍 Meeting point — Seoul or agreed pickup point
- 👥 Group size — 2–15 guests
- 🍽️ Meals — Not included unless stated in the quote
- 🎟️ Admission — Confirmed in the quote

**Cost**

`The cost includes`

- Personal guide
- Planned evening route

`The cost excludes / requires confirmation`

- Food and drinks
- Transit fares and admission fees unless listed
- Optional activities
- Additional time or special transportation

**FAQ 추가**

- `What time does the tour start?` — Exact start time is arranged around the guest’s schedule.
- `Can we choose the neighborhoods?` — Yes, subject to time and travel distance.
- `Is dinner included?` — Not unless it is specifically included in the quote.
- `Is this the same as Walking & Transit Tour?` — 사용자 결정 필요.

### C. 그대로 유지

- Seoul 야간 경험이라는 상품 성격
- 지하철·도보
- 봉은사, COEX, 강남, DDP, 명동 명소
- `Custom quote`
- 2–15명

### D. 사용자 결정 필요

- 기본 투어 시간을 4시간으로 정할지
- 야간 추가 시간 단가를 Walking & Transit와 동일하게 적용할지
- 식사·입장료·교통비 포함 여부
- 최소 출발 시간과 운영 가능 요일
- 아동 가격·연령 정책

---

## 7. Best of Korea: Seoul, Gyeongju & Busan in 7 Days — 추가 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Multi-Day Private Tour`
- Duration: `7 days`
- 가격: `Custom quote`
- 인원: `5–25 guests`
- Trip Info: Private bus and domestic transport as required, 3-star hotels, Seoul 출발, Spring and autumn, Eco-tour and hiking, 식사는 최종 일정·견적 확정, English/Korean, Easy to moderate, 최소 12세·최대 75세.
- Overview, Highlights, Itinerary, Cost, FAQ 있음.
- 일정: Seoul/DMZ/Suwon/Gyeongju/Busan/출국.

### B. 통일 후 제안 화면

**Price card**

| Option | Duration | Price |
|---|---|---:|
| Private Korea journey | 7 days | `Custom quote` |

카드 하단 문구:

> Private multi-day itinerary for groups of 5–25. Final price depends on itinerary, accommodation, transportation, and group details.

버튼: `Check Availability`

**Trip Info**

- 🚌 Transportation — Private bus and domestic transport as required
- 🏨 Accommodation — 3-star hotels; exact hotels confirmed in quote
- 📍 Departure — Seoul
- 👥 Group size — 5–25 guests
- 🍽️ Meals — Confirmed in final itinerary and quote
- 🗣️ Language — English and Korean
- 🛂 Special conditions — DMZ subject to government and operational conditions

**Cost**

`The cost includes`

- Items explicitly listed in the final quote: transportation, accommodation, meals, guide, and admission fees as applicable

`The cost excludes`

- International airfare
- Visa charges
- Travel insurance
- Personal expenses
- Services not listed in the quote

### C. 그대로 유지

- 7일 일정
- Seoul, DMZ, Suwon, Gyeongju, Busan
- `Custom quote`
- 5–25명, 최소 12세·최대 75세
- DMZ 조건부 운영

### D. 사용자 결정 필요

- 과거 참고 화면의 `$2,900`을 다시 사용할지, Custom quote를 유지할지
- 숙박·식사·입장료의 기본 포함 범위
- 부산 출국과 인천 출국의 가격 차이
- 국내 교통과 전용 버스/기사의 범위
- 일정에 실제로 포함할 Nami Island/Petite France/Garden of Morning Calm 여부

---

## 8. Grand South Korea: 12 Days / 11 Nights — 추가 상품

### A. 현재 화면에 보이는 내용

- 카테고리: `Multi-Day Private Tour`
- Duration: `12 days · 11 nights`
- 가격: `Custom quote`
- 인원: `5–25 guests`
- Trip Info: Private bus and domestic flights, 3-star hotels, Seoul 출발, Spring and autumn, Eco-tour and hiking, 식사는 최종 일정·견적 확정, English/Korean, Easy to moderate, 최소 12세·최대 65세.
- Overview, Highlights, Itinerary, Cost, FAQ 있음.
- 일정: Incheon 도착 → Jeju → Suncheon/Boseong → Busan → Gyeongju → Sokcho/Seoraksan → Seoul → DMZ → Suwon → Incheon 출국.

### B. 통일 후 제안 화면

**Price card**

| Option | Duration | Price |
|---|---|---:|
| Private Korea journey | 12 days · 11 nights | `Custom quote` |

카드 하단 문구:

> A private multi-region Korea journey for groups of 5–25. Final price depends on domestic flights, accommodation, transportation, and the confirmed itinerary.

버튼: `Check Availability`

**Trip Info**

- ✈️ Transportation — Private bus and domestic flights
- 🏨 Accommodation — 3-star hotels; exact hotels confirmed in quote
- 📍 Departure — Seoul / arrival and departure airport confirmed in itinerary
- 👥 Group size — 5–25 guests
- 🍽️ Meals — Confirmed in final itinerary and quote
- 🗣️ Language — English and Korean
- 🛂 Special conditions — DMZ subject to government and operational conditions

**Cost**

`The cost includes`

- Domestic flights and services explicitly listed in the final quote
- Accommodation, transportation, guide, meals, and admission fees as confirmed

`The cost excludes`

- International airfare
- Visa charges
- Travel insurance
- Personal expenses
- Optional hotel extras, early check-in, late check-out, room upgrades
- Services not listed in the quote

### C. 그대로 유지

- 12일 11박
- Jeju, Suncheon, Boseong, Busan, Gyeongju, Sokcho, Seoul, DMZ, Suwon
- `Custom quote`
- 5–25명, 최소 12세·최대 65세
- 국내선이 필요하다는 점

### D. 사용자 결정 필요

- 과거 참고 화면의 `$8,750`을 다시 사용할지, Custom quote를 유지할지
- 제주·여수 구간의 국내선과 공항 이동 포함 범위
- 12일 동안 모든 식사를 포함할지
- 숙박 도시·등급과 객실 기준
- 부산/제주 출국 옵션의 가격·운영 가능 여부

---

## 최종 승인 전 확인할 결정 목록

1. `Seoul Full Day Tour`를 `Walking & Transit Tour`와 별도 상품으로 유지할지
2. `Seoul Night Tour`의 기본 시간·식사·교통·입장료 정책
3. 기존 3개 단기 투어의 최소/최대 연령과 아동 가격
4. 7일·12일 투어를 계속 `Custom quote`로 둘지, 과거 달러 가격을 복원할지
5. 장기 투어의 숙박·식사·국내선·전용 버스 포함 범위
6. 모든 상품의 CTA를 `Check Availability`와 `Get an Exact Quote` 중 어떤 기준으로 나눌지
7. 이 문서의 제안 문구를 승인한 뒤에만 실제 코드·콘텐츠를 수정할지
