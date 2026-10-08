// Xáo trộn trên bản sao để không làm thay đổi ngân hàng câu hỏi gốc.
function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

// Mỗi câu gồm đáp án đúng trước, sau đó là ba phương án nhiễu.
function makeQuestions(rows) {
  return rows.map(([question, correctAnswer, ...wrongAnswers]) => {
    const answers = shuffle([correctAnswer, ...wrongAnswers]);
    return { question, answers, correct: answers.indexOf(correctAnswer) };
  });
}

const questionBank = {
  english: {
    easy: makeQuestions([
      ["Hoàn thành: My sister ___ a student.", "is", "are", "am", "be"],
      ["Hoàn thành: I usually ___ breakfast at 7 a.m.", "have", "has", "having", "had"],
      ["Hoàn thành: They ___ football in the school yard now.", "are playing", "play", "played", "plays"],
      ["Hoàn thành: We ___ to Hue last summer.", "travelled", "travel", "are travelling", "will travel"],
      ["Chọn từ đúng: There ___ an interesting book on the table.", "is", "are", "be", "were"],
      ["Dạng số nhiều đúng của 'child' là gì?", "children", "childs", "childes", "childrens"],
      ["Hoàn thành phép so sánh: A bicycle is ___ than a car.", "slower", "slowest", "more slow", "slow"],
      ["Chọn động từ khuyết thiếu diễn tả khả năng: She ___ speak three languages.", "can", "mustn't", "shouldn't", "may not"],
      ["Hoàn thành: I am interested ___ learning about the environment.", "in", "on", "at", "for"],
      ["Từ nào gần nghĩa nhất với 'happy'?", "glad", "angry", "worried", "tired"]
    ]),
    medium: makeQuestions([
      ["Hoàn thành: Mai ___ in this city since 2022.", "has lived", "lived", "is living", "will live"],
      ["Hoàn thành: I ___ a book when the lights went out.", "was reading", "read", "am reading", "have read"],
      ["Câu điều kiện loại 1: If we leave now, we ___ the bus.", "will catch", "would catch", "caught", "had caught"],
      ["Chuyển sang câu bị động: 'They built this school in 2010.'", "This school was built in 2010.", "This school is built in 2010.", "This school built in 2010.", "This school has build in 2010."],
      ["Chọn đại từ quan hệ phù hợp: The girl ___ won the prize is my classmate.", "who", "which", "where", "whose"],
      ["Hoàn thành: We stayed at home ___ it was raining heavily.", "because", "although", "however", "despite"],
      ["Chọn câu tường thuật đúng cho 'Lan said, “I am tired.”'", "Lan said that she was tired.", "Lan said that I am tired.", "Lan said that she is tiring.", "Lan said she tired."],
      ["Hoàn thành: There isn't ___ information about the event yet.", "much", "many", "a few", "several"],
      ["Hoàn thành: The student ___ project won first prize thanked the team.", "whose", "who", "which", "where"],
      ["Chọn câu có nghĩa 'Mặc dù mệt, cô ấy vẫn hoàn thành bài tập.'", "Although she was tired, she finished her homework.", "Because she was tired, she finished her homework.", "Despite she was tired, she finished her homework.", "Although being tired, but she finished her homework."]
    ]),
    hard: makeQuestions([
      ["Câu điều kiện loại 2: If I ___ more free time, I would join the English club.", "had", "have", "will have", "am having"],
      ["Chuyển sang câu bị động: 'They have cleaned the classroom.'", "The classroom has been cleaned.", "The classroom was cleaned.", "The classroom has cleaned.", "The classroom is being clean."],
      ["Hoàn thành: He said, 'I will help you.' → He said that he ___ help me.", "would", "will", "can", "has"],
      ["Hoàn thành: The woman ___ car was stolen reported it to the police.", "whose", "who", "which", "whom"],
      ["Hoàn thành: You should avoid ___ too much single-use plastic.", "using", "to use", "use", "used"],
      ["Chọn cấu trúc đúng với 'despite'.", "Despite the heavy rain, the match continued.", "Despite it was raining, the match continued.", "Despite of the rain, the match continued.", "Despite the rain was heavy, the match continued."],
      ["Câu nào diễn tả điều bị cấm?", "You mustn't use your phone during the exam.", "You don't have to bring a dictionary.", "You should bring a dictionary.", "You might bring a dictionary."],
      ["Hoàn thành: The more carefully you plan, ___ your project will be.", "the more successful", "more successful", "the most successful", "the successfully"],
      ["Hoàn thành: I wish I ___ more confident when speaking English.", "were", "am", "will be", "have been"],
      ["Cụm từ nào kết hợp tự nhiên với 'research' trong câu học thuật?", "do research", "make research", "take research", "put research"]
    ])
  },
  math: {
    easy: makeQuestions([
      ["Cho A = {1, 2, 3} và B = {2, 3, 4}. Tập A ∩ B là gì?", "{2, 3}", "{1, 4}", "{1, 2, 3, 4}", "∅"],
      ["Cho hàm số f(x) = 2x − 3. Tính f(4).", "5", "8", "11", "−5"],
      ["Tập xác định của y = √(x − 1) là gì?", "x ≥ 1", "x > 1", "x ≤ 1", "Mọi x ∈ ℝ"],
      ["Nghiệm của phương trình x² = 16 là gì?", "x = −4 hoặc x = 4", "x = 4", "x = −4", "x = 8"],
      ["Tổng ba góc trong một tam giác bằng bao nhiêu độ?", "180°", "90°", "270°", "360°"],
      ["Cho A(1; 2), B(4; 6). Tọa độ vectơ AB là gì?", "(3; 4)", "(5; 8)", "(−3; −4)", "(4; 3)"],
      ["Giá trị của sin 30° là bao nhiêu?", "1/2", "√3/2", "1", "0"],
      ["Số trung bình của mẫu 2, 4, 6 là bao nhiêu?", "4", "3", "5", "12"],
      ["Khoảng biến thiên của mẫu số liệu 2, 5, 7 là bao nhiêu?", "5", "3", "7", "14"],
      ["Gieo một đồng xu cân đối. Xác suất xuất hiện mặt ngửa là bao nhiêu?", "1/2", "1/4", "1", "0"]
    ]),
    medium: makeQuestions([
      ["Giải phương trình x² − 5x + 6 = 0.", "x = 2 hoặc x = 3", "x = −2 hoặc x = −3", "x = 1 hoặc x = 6", "x = −1 hoặc x = −6"],
      ["Đỉnh của parabol y = x² − 4x + 3 là điểm nào?", "(2; −1)", "(−2; −1)", "(2; 1)", "(4; 3)"],
      ["Giải bất phương trình x² − 9 < 0.", "−3 < x < 3", "x < −3 hoặc x > 3", "x > 3", "x < 3"],
      ["Đường thẳng y = 2x + 1 có hệ số góc bằng bao nhiêu?", "2", "1", "−2", "3"],
      ["Tính tích vô hướng (1; 2) · (3; −1).", "1", "5", "−1", "6"],
      ["Gieo một xúc xắc cân đối. Xác suất ra số chẵn là bao nhiêu?", "1/2", "1/3", "1/6", "2/3"],
      ["Trung vị của mẫu số liệu 2, 5, 7, 9, 12 là bao nhiêu?", "7", "5", "9", "35"],
      ["Cho A = {1, 2, 3} và B = {3, 4}. Tập A ∪ B là gì?", "{1, 2, 3, 4}", "{3}", "{1, 2, 4}", "∅"],
      ["Giải hệ 2x + y = 7, x − y = 2.", "x = 3, y = 1", "x = 1, y = 3", "x = 2, y = 3", "x = 4, y = −1"],
      ["Giá trị của cos 60° là bao nhiêu?", "1/2", "√3/2", "1", "0"]
    ]),
    hard: makeQuestions([
      ["Giá trị nhỏ nhất của y = x² − 6x + 11 là bao nhiêu?", "2", "−2", "11", "0"],
      ["Giải bất phương trình x² − 4x + 3 ≥ 0.", "x ≤ 1 hoặc x ≥ 3", "1 ≤ x ≤ 3", "x < 1", "x > 3"],
      ["Parabol y = x² − 4x + 1 có trục đối xứng là đường thẳng nào?", "x = 2", "x = −2", "y = 2", "x = 4"],
      ["Đường thẳng qua A(1; 2) và B(3; 6) có phương trình nào?", "y = 2x", "y = x + 1", "y = 2x + 1", "y = 3x − 1"],
      ["Gieo hai xúc xắc cân đối. Xác suất để tổng số chấm bằng 8 là bao nhiêu?", "5/36", "1/6", "1/9", "7/36"],
      ["Cho a = (2; 1), b = (−1; 2). Hai vectơ này có quan hệ nào?", "Vuông góc", "Cùng phương", "Đối nhau", "Bằng nhau"],
      ["Mẫu số liệu 1, 3, 5, 7, 9 có trung vị bằng bao nhiêu?", "5", "3", "7", "25"],
      ["Cho f(x) = x² − 2x. Tính f(f(3)).", "3", "8", "6", "12"],
      ["Nghiệm của phương trình (x − 1)/(x + 2) = 0 là gì?", "x = 1", "x = −2", "x = 0", "x = 2"],
      ["Một tam giác có ba đỉnh A(0; 0), B(4; 0), C(0; 3). Độ dài cạnh BC là bao nhiêu?", "5", "4", "3", "7"]
    ])
  },
  it: {
    easy: makeQuestions([
      ["Thiết bị thông minh là gì?", "Thiết bị có khả năng xử lí thông tin và tương tác với người dùng", "Thiết bị chỉ dùng để giải trí", "Thiết bị không sử dụng phần mềm", "Thiết bị chỉ hoạt động thủ công"],
      ["Đâu là một thiết bị thông minh?", "Điện thoại thông minh", "Thước kẻ", "Bút chì", "Quyển vở"],
      ["Tin học có vai trò chủ yếu là gì?", "Xử lí, lưu trữ và trao đổi thông tin", "Chỉ phục vụ giải trí", "Làm giảm khả năng giao tiếp", "Thay thế hoàn toàn con người"],
      ["Thiết bị thông minh giúp con người làm gì?", "Thu thập, xử lí và trao đổi thông tin thuận tiện", "Hạn chế trao đổi thông tin", "Không cần sử dụng thông tin", "Chỉ làm việc thủ công"],
      ["Dùng máy tính để học trực tuyến thể hiện vai trò của tin học trong lĩnh vực nào?", "Giáo dục", "Y tế", "Giao thông", "Nông nghiệp"],
      ["Thiết bị thông minh là thiết bị có khả năng nào sau đây?", "Có khả năng xử lí thông tin và kết nối, tương tác với người dùng", "Chỉ thực hiện một chức năng duy nhất", "Chỉ dùng để giải trí", "Không cần phần mềm để hoạt động"],
      ["Thiết bị nào sau đây là thiết bị thông minh?", "Điện thoại thông minh", "Bút chì", "Thước kẻ", "Quyển sách"],
      ["Tin học có vai trò quan trọng trong xã hội vì giúp con người làm gì?", "Xử lí và khai thác thông tin hiệu quả", "Giảm khả năng giao tiếp", "Không cần học tập", "Loại bỏ hoàn toàn lao động của con người"],
      ["Điện thoại thông minh có thể thực hiện chức năng nào?", "Gọi điện, truy cập Internet và cài đặt ứng dụng", "Chỉ nghe gọi", "Chỉ chụp ảnh", "Chỉ dùng để xem giờ"],
      ["Một lợi ích của thiết bị thông minh trong học tập là gì?", "Hỗ trợ tìm kiếm, trao đổi và tiếp cận tài liệu học tập", "Làm học sinh không cần học", "Làm giảm khả năng tiếp thu", "Thay thế hoàn toàn giáo viên"]
    ]),
    medium: makeQuestions([
      ["Trong y tế, tin học có thể giúp việc gì?", "Quản lí hồ sơ bệnh nhân", "Làm mất dữ liệu bệnh nhân", "Thay thế hoàn toàn bác sĩ", "Ngăn cản trao đổi thông tin"],
      ["GPS trên điện thoại thông minh chủ yếu dùng để làm gì?", "Xác định vị trí và hỗ trợ chỉ đường", "Soạn thảo văn bản", "Chụp ảnh", "Nghe nhạc"],
      ["Một lợi ích của tin học đối với xã hội là gì?", "Tăng hiệu quả công việc", "Làm thông tin chậm hơn", "Hạn chế kết nối", "Làm giảm năng suất lao động"],
      ["Đồng hồ thông minh theo dõi nhịp tim và gửi dữ liệu đến điện thoại cho thấy khả năng nào?", "Thu thập và trao đổi dữ liệu", "Chỉ hiển thị giờ", "Không cần phần mềm", "Hoạt động hoàn toàn thủ công"],
      ["Khi sử dụng thiết bị thông minh, người dùng cần chú ý điều gì?", "Bảo vệ thông tin cá nhân", "Chia sẻ mật khẩu cho mọi người", "Cài mọi ứng dụng không cần kiểm tra", "Công khai tất cả dữ liệu cá nhân"],
      ["Tin học góp phần thúc đẩy xã hội phát triển chủ yếu thông qua việc gì?", "Tăng khả năng xử lí, lưu trữ và trao đổi thông tin", "Làm giảm nhu cầu sử dụng thông tin", "Hạn chế kết nối giữa con người", "Làm cho mọi công việc trở nên thủ công"],
      ["Trong y tế, tin học có thể được ứng dụng để làm gì?", "Quản lí hồ sơ bệnh án và hỗ trợ chẩn đoán", "Thay thế hoàn toàn bác sĩ", "Làm thuốc mà không cần kiểm tra", "Loại bỏ việc khám bệnh"],
      ["Trong sản xuất, thiết bị thông minh giúp ích thế nào?", "Tăng khả năng tự động hóa và nâng cao hiệu quả sản xuất", "Làm giảm độ chính xác", "Tăng công việc thủ công", "Không cần dữ liệu"],
      ["Internet kết hợp với các thiết bị thông minh tạo điều kiện thuận lợi cho điều gì?", "Kết nối và trao đổi thông tin", "Hạn chế giao tiếp", "Ngăn chặn việc chia sẻ dữ liệu", "Chỉ sử dụng máy tính ngoại tuyến"],
      ["Một trong những tác động tích cực của tin học đối với xã hội là gì?", "Tạo ra nhiều phương thức học tập và làm việc mới", "Làm con người không cần giao tiếp", "Làm mọi thông tin đều chính xác tuyệt đối", "Xóa bỏ hoàn toàn các vấn đề xã hội"]
    ]),
    hard: makeQuestions([
      ["Tin học góp phần thay đổi cách làm việc bằng cách nào?", "Tăng cường tự động hóa", "Tăng công việc thủ công", "Làm giảm tốc độ xử lí", "Hạn chế sử dụng dữ liệu"],
      ["Tác động của tin học đối với xã hội như thế nào?", "Có cả tác động tích cực và những vấn đề cần giải quyết", "Chỉ có mặt tích cực", "Chỉ có mặt tiêu cực", "Không có ảnh hưởng"],
      ["Vì sao sự phát triển của tin học có thể làm thay đổi việc làm?", "Một số công việc được tự động hóa và xuất hiện nghề mới", "Tất cả nghề nghiệp đều biến mất", "Con người không cần học tập nữa", "Máy tính thay thế con người trong mọi công việc"],
      ["Hành động nào thể hiện sử dụng tin học có trách nhiệm?", "Tôn trọng quyền riêng tư và bản quyền", "Sao chép mọi thông tin trên mạng", "Chia sẻ mật khẩu với người khác", "Sử dụng tài khoản của người khác"],
      ["THỬ THÁCH: Học sinh dùng điện thoại học trực tuyến, tìm tài liệu, lưu bài trên đám mây và trao đổi với giáo viên. Điều này cho thấy điều gì?", "Tin học và thiết bị thông minh hỗ trợ hiệu quả cho học tập và trao đổi thông tin", "Thiết bị thông minh chỉ dùng để giải trí", "Điện thoại có thể thay thế hoàn toàn giáo viên", "Internet chỉ dùng để chơi game"],
      ["Vì sao thiết bị thông minh có thể góp phần nâng cao chất lượng cuộc sống?", "Chúng giúp con người thực hiện nhiều công việc thuận tiện và hiệu quả hơn", "Chúng có thể thay thế con người trong mọi lĩnh vực", "Chúng không cần con người điều khiển", "Chúng luôn hoạt động mà không cần năng lượng"],
      ["Khi sử dụng thiết bị thông minh, vấn đề nào cần đặc biệt quan tâm?", "An toàn thông tin và quyền riêng tư", "Chỉ quan tâm đến hình thức thiết bị", "Sử dụng càng nhiều càng tốt", "Chia sẻ mọi thông tin cá nhân lên Internet"],
      ["Trường học dùng hệ thống trực tuyến giao bài, thu bài và theo dõi kết quả thể hiện vai trò nào của tin học?", "Hỗ trợ quản lí và nâng cao hiệu quả giáo dục", "Thay thế hoàn toàn việc học trực tiếp", "Làm giảm khả năng trao đổi thông tin", "Chỉ phục vụ mục đích giải trí"],
      ["Thành phố dùng cảm biến và máy tính theo dõi giao thông, điều chỉnh đèn và phát hiện ùn tắc là ví dụ nào?", "Ứng dụng thiết bị thông minh và tin học trong quản lí đô thị", "Sử dụng thiết bị thông minh để giải trí", "Ứng dụng tin học trong sáng tác văn học", "Hạn chế việc sử dụng dữ liệu"],
      ["Nhận định nào đúng nhất về vai trò của tin học và thiết bị thông minh đối với xã hội?", "Mang lại nhiều lợi ích nhưng cũng đặt ra yêu cầu về an toàn thông tin, quyền riêng tư và cách sử dụng có trách nhiệm", "Chỉ mang lại lợi ích và không có bất kỳ hạn chế nào", "Chỉ được sử dụng trong lĩnh vực công nghệ", "Có thể thay thế hoàn toàn con người trong mọi hoạt động"]
    ])
  },
  literature: {
    easy: makeQuestions([
      ["Thần thoại thường kể về điều gì?", "Nguồn gốc thế giới và các hiện tượng tự nhiên qua trí tưởng tượng", "Các quy tắc giao thông hiện đại", "Một thí nghiệm khoa học", "Hướng dẫn sử dụng thiết bị"],
      ["Sử thi thường tập trung ca ngợi nhân vật nào?", "Người anh hùng đại diện cho cộng đồng", "Một nhân vật chỉ xuất hiện trong truyện cười", "Người kể chuyện ngoài văn bản", "Nhân vật không tham gia sự kiện"],
      ["Thơ trữ tình chủ yếu bộc lộ điều gì?", "Cảm xúc và suy nghĩ của chủ thể trữ tình", "Các bước tiến hành thí nghiệm", "Thông tin thống kê", "Quy định pháp luật"],
      ["Người kể chuyện xưng 'tôi' thường sử dụng ngôi kể nào?", "Ngôi thứ nhất", "Ngôi thứ hai", "Ngôi thứ ba", "Không có ngôi kể"],
      ["Chủ đề của một tác phẩm là gì?", "Vấn đề trung tâm được tác phẩm đặt ra", "Tên của tất cả nhân vật", "Số lượng đoạn văn", "Nơi xuất bản tác phẩm"],
      ["Biện pháp ẩn dụ dựa trên cơ sở nào?", "Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng", "Lặp lại nguyên văn một câu", "Liệt kê theo thứ tự thời gian", "Đảo vị trí các từ ngẫu nhiên"],
      ["Câu nào sử dụng phép so sánh?", "Mặt hồ phẳng như tấm gương", "Mặt hồ đang yên lặng", "Mặt hồ phản chiếu hàng cây", "Mặt hồ xanh trong buổi sớm"],
      ["Trong văn bản nghị luận, luận đề là gì?", "Ý kiến khái quát cần được làm sáng tỏ", "Một chi tiết miêu tả", "Tên người viết", "Phần chú thích cuối trang"],
      ["Dẫn chứng trong bài nghị luận có tác dụng gì?", "Làm căn cứ hỗ trợ và tăng sức thuyết phục cho luận điểm", "Thay thế hoàn toàn luận điểm", "Kéo dài văn bản", "Giới thiệu nhân vật hư cấu"],
      ["Hình ảnh thơ là gì?", "Hình ảnh gợi ra sự vật, cảnh vật hoặc cảm xúc trong tâm trí người đọc", "Tên gọi của nhịp thơ", "Dấu câu ở cuối dòng", "Số tiếng trong một đoạn văn"]
    ]),
    medium: makeQuestions([
      ["Tác giả khắc họa tính cách nhân vật gián tiếp rõ nhất qua yếu tố nào?", "Hành động, lời nói và cách nhân vật ứng xử", "Số trang của tác phẩm", "Tên nhà xuất bản", "Kiểu chữ in"],
      ["Tác dụng thường gặp của ngôi kể thứ nhất là gì?", "Tạo cảm giác gần gũi với trải nghiệm của người kể", "Giúp người kể biết mọi suy nghĩ của mọi nhân vật", "Loại bỏ hoàn toàn cảm xúc", "Biến truyện thành văn bản hướng dẫn"],
      ["Một chi tiết được lặp lại nhiều lần trong truyện có thể có vai trò gì?", "Nhấn mạnh chủ đề hoặc gợi ý nghĩa biểu tượng", "Chỉ để tăng số lượng chữ", "Luôn báo hiệu kết thúc có hậu", "Thay thế toàn bộ cốt truyện"],
      ["Trong thơ, nhịp điệu góp phần tạo nên điều gì?", "Âm hưởng và mạch cảm xúc của bài thơ", "Danh sách nhân vật", "Thứ tự xuất bản", "Số lượng luận điểm"],
      ["Nhân hóa là biện pháp tu từ nào?", "Gọi hoặc tả vật bằng từ ngữ vốn dùng cho con người", "So sánh hai số liệu", "Lặp một âm ở cuối câu", "Nói quá độ dài văn bản"],
      ["Một luận điểm thuyết phục cần được hỗ trợ chủ yếu bằng gì?", "Lí lẽ hợp lí và dẫn chứng phù hợp", "Nhiều dấu chấm than", "Ý kiến không liên quan", "Tên gọi viết tắt"],
      ["Khi đánh giá độ tin cậy của thông tin trong văn bản, nên chú ý điều gì?", "Nguồn thông tin, bằng chứng và thời điểm công bố", "Màu giấy in", "Độ dài tiêu đề", "Số chữ trong tên tác giả"],
      ["Sự đối lập giữa hai hình ảnh trong một bài thơ thường giúp gì?", "Làm nổi bật khác biệt và tăng sức gợi cảm", "Xóa bỏ chủ đề", "Chuyển văn bản thành văn bản pháp luật", "Đảm bảo hai hình ảnh có nghĩa giống nhau"],
      ["Khi so sánh hai văn bản cùng chủ đề, cách làm phù hợp là gì?", "Chỉ ra điểm tương đồng và khác biệt dựa trên chi tiết", "Chỉ kể lại một văn bản", "Đánh giá theo độ dài", "Bỏ qua nội dung và hình thức"],
      ["Cách trích dẫn nào giúp bài nghị luận rõ ràng hơn?", "Dẫn đúng ý kiến hoặc chi tiết và nêu nguồn khi cần", "Chép một đoạn dài không liên quan", "Thay lời tác giả bằng ý mình", "Nêu dẫn chứng nhưng không giải thích"]
    ]),
    hard: makeQuestions([
      ["Khi người kể chuyện biết suy nghĩ của nhiều nhân vật và sự việc ở nhiều nơi, điểm nhìn thường có đặc điểm nào?", "Điểm nhìn toàn tri", "Điểm nhìn hạn tri của một nhân vật", "Ngôi thứ hai", "Không có người kể"],
      ["Trình tự kể đảo lộn thời gian hiện tại và quá khứ có thể tạo tác dụng gì?", "Gợi hồi tưởng và giúp người đọc khám phá nguyên nhân dần dần", "Luôn làm câu chuyện mất chủ đề", "Chỉ dùng trong văn bản khoa học", "Xóa bỏ quan hệ giữa các sự kiện"],
      ["Một hình ảnh mang ý nghĩa biểu tượng thường được nhận biết tốt nhất bằng cách nào?", "Xem xét sự lặp lại, vị trí và liên hệ của nó với chủ đề", "Chỉ dựa vào nghĩa từ điển", "Đếm số chữ trong hình ảnh", "Tách hình ảnh khỏi toàn bộ tác phẩm"],
      ["Khi hai nhân vật có cách nhìn trái ngược về cùng một sự kiện, người đọc nên làm gì?", "Đối chiếu lời kể, hành động và hoàn cảnh của từng nhân vật", "Mặc định người nói trước luôn đúng", "Bỏ qua một nhân vật", "Chỉ dựa vào tên nhân vật"],
      ["Trong bài nghị luận, phản biện một ý kiến đối lập hiệu quả nhất bằng cách nào?", "Nêu rõ ý kiến, phân tích điểm chưa hợp lí và đưa bằng chứng", "Công kích người nêu ý kiến", "Lặp lại luận điểm của mình", "Đưa dẫn chứng không liên quan"],
      ["Sự thay đổi giọng điệu giữa các đoạn văn thường góp phần thể hiện điều gì?", "Sự chuyển biến trong cảm xúc hoặc lập luận", "Lỗi chính tả của tác giả", "Số lượng nhân vật", "Tên thể loại duy nhất"],
      ["Khi một văn bản sử dụng nghịch lí hoặc mâu thuẫn bề ngoài, cách đọc phù hợp là gì?", "Tìm ý nghĩa hàm ẩn trong ngữ cảnh toàn văn bản", "Hiểu từng từ theo nghĩa đen בלבד", "Bỏ qua các chi tiết liên quan", "Cho rằng văn bản không có chủ đề"],
      ["Luận cứ nào phù hợp nhất để bảo vệ một nhận định về tác phẩm?", "Chi tiết cụ thể được giải thích gắn với nhận định", "Một sở thích cá nhân không có dẫn chứng", "Thông tin ngoài lề không liên quan", "Một kết luận lặp lại nguyên văn"],
      ["Khi chuyển thể một truyện thành kịch, yếu tố nào thường cần được điều chỉnh?", "Lời kể và miêu tả được chuyển thành hành động, lời thoại sân khấu", "Chủ đề bắt buộc phải đổi hoàn toàn", "Tất cả nhân vật phải bị lược bỏ", "Ngôn ngữ phải thành văn bản nghị luận"],
      ["Một kết luận đọc hiểu có sức thuyết phục cần dựa trên điều gì?", "Sự kết hợp giữa chi tiết văn bản và suy luận hợp lí", "Cảm nhận không cần căn cứ", "Thông tin tiểu sử không liên quan", "Một câu trích dẫn chưa được giải thích"]
    ])
  },
  science: {
    easy: makeQuestions([
      ["Hạt nào mang điện tích dương trong hạt nhân nguyên tử?", "Proton", "Electron", "Neutron", "Phân tử"],
      ["Số hiệu nguyên tử của một nguyên tố bằng số hạt nào trong hạt nhân?", "Proton", "Neutron", "Electron lớp ngoài cùng", "Phân tử"],
      ["Bảng tuần hoàn hiện đại sắp xếp các nguyên tố chủ yếu theo chiều tăng của đại lượng nào?", "Số hiệu nguyên tử", "Nguyên tử khối giảm dần", "Số neutron giảm dần", "Nhiệt độ nóng chảy"],
      ["Liên kết ion thường hình thành khi có sự chuyển electron giữa những loại nguyên tử nào?", "Kim loại và phi kim", "Hai nguyên tử khí hiếm", "Hai nguyên tử phi kim giống nhau", "Hai phân tử nước"],
      ["Phân tử O₂ gồm bao nhiêu nguyên tử oxygen?", "2", "1", "3", "4"],
      ["Đại lượng nào sau đây là đại lượng vectơ?", "Độ dịch chuyển", "Quãng đường", "Thời gian", "Khối lượng"],
      ["Tốc độ trung bình được tính bằng công thức nào?", "Quãng đường chia cho thời gian", "Thời gian chia cho quãng đường", "Khối lượng nhân gia tốc", "Lực chia diện tích"],
      ["Gia tốc cho biết điều gì?", "Mức độ thay đổi vận tốc theo thời gian", "Quãng đường vật đi được", "Khối lượng của vật", "Thời gian chuyển động"],
      ["Theo định luật I Newton, nếu hợp lực tác dụng lên vật bằng 0 thì vật thế nào?", "Đứng yên hoặc chuyển động thẳng đều", "Luôn tăng tốc", "Luôn giảm tốc", "Đổi hướng liên tục"],
      ["Đơn vị SI của lực là gì?", "Niutơn (N)", "Jun (J)", "Oát (W)", "Mét (m)"]
    ]),
    medium: makeQuestions([
      ["Một vật đi được 150 m trong 30 s. Tốc độ trung bình của vật là bao nhiêu?", "5 m/s", "3 m/s", "30 m/s", "180 m/s"],
      ["Nguyên tử magnesium có số hiệu nguyên tử 12. Nguyên tử trung hòa có bao nhiêu electron?", "12", "6", "24", "10"],
      ["Nguyên tử sodium tạo ion Na⁺ bằng cách nào?", "Nhường 1 electron", "Nhận 1 electron", "Nhường 2 electron", "Nhận 2 proton"],
      ["Phương trình cân bằng của phản ứng H₂ + O₂ → H₂O là gì?", "2H₂ + O₂ → 2H₂O", "H₂ + O₂ → H₂O", "H₂ + 2O₂ → H₂O", "2H₂ + 2O₂ → H₂O"],
      ["Số mol có trong 18 g nước (M = 18 g/mol) là bao nhiêu?", "1 mol", "0,5 mol", "18 mol", "324 mol"],
      ["Một vật bắt đầu từ nghỉ, chuyển động nhanh dần đều với gia tốc 2 m/s² trong 4 s. Vận tốc cuối là bao nhiêu?", "8 m/s", "2 m/s", "6 m/s", "16 m/s"],
      ["Một xe đi đều 72 km trong 2 giờ. Tốc độ trung bình là bao nhiêu?", "36 km/h", "24 km/h", "70 km/h", "144 km/h"],
      ["Hai lực cùng phương ngược chiều có độ lớn 10 N và 4 N. Hợp lực có độ lớn bao nhiêu?", "6 N", "14 N", "40 N", "2,5 N"],
      ["Vật có khối lượng 2 kg, lấy g = 10 m/s². Trọng lực tác dụng lên vật có độ lớn bao nhiêu?", "20 N", "2 N", "10 N", "200 N"],
      ["Phản ứng tỏa nhiệt là phản ứng như thế nào?", "Truyền năng lượng dưới dạng nhiệt ra môi trường", "Luôn hấp thụ nhiệt từ môi trường", "Không trao đổi năng lượng", "Chỉ xảy ra khi có ánh sáng"]
    ]),
    hard: makeQuestions([
      ["Một vật có vận tốc đầu 2 m/s, gia tốc 3 m/s² và chuyển động trong 4 s. Độ dịch chuyển là bao nhiêu?", "32 m", "24 m", "20 m", "14 m"],
      ["Hợp lực 6 N tác dụng lên vật khối lượng 2 kg. Gia tốc của vật là bao nhiêu?", "3 m/s²", "12 m/s²", "8 m/s²", "0,33 m/s²"],
      ["Một lực 20 N cùng hướng với độ dịch chuyển 5 m. Công của lực là bao nhiêu?", "100 J", "4 J", "25 J", "0,25 J"],
      ["Một thiết bị thực hiện công 600 J trong 10 s. Công suất trung bình là bao nhiêu?", "60 W", "6000 W", "610 W", "0,06 W"],
      ["Vật khối lượng 0,5 kg chuyển động với vận tốc 4 m/s. Động lượng có độ lớn bao nhiêu?", "2 kg·m/s", "8 kg·m/s", "0,125 kg·m/s", "4,5 kg·m/s"],
      ["Một vật khối lượng 2 kg ở độ cao 5 m. Lấy g = 10 m/s². Thế năng trọng trường của vật là bao nhiêu?", "100 J", "50 J", "25 J", "10 J"],
      ["Số oxi hóa của manganese trong KMnO₄ là bao nhiêu?", "+7", "+2", "+4", "−1"],
      ["Cho 0,2 mol H₂ phản ứng vừa đủ với O₂ theo 2H₂ + O₂ → 2H₂O. Số mol O₂ cần dùng là bao nhiêu?", "0,1 mol", "0,2 mol", "0,4 mol", "0,05 mol"],
      ["Hòa tan 0,5 mol NaCl để thu được 2 lít dung dịch. Nồng độ mol là bao nhiêu?", "0,25 mol/L", "1 mol/L", "2,5 mol/L", "4 mol/L"],
      ["Khi tăng nhiệt độ, tốc độ của phần lớn phản ứng hóa học thường thay đổi thế nào?", "Tăng lên", "Giảm về 0", "Không bao giờ thay đổi", "Luôn đổi chiều phản ứng"]
    ])
  }
};