// Mỗi câu có một đáp án đúng và ba phương án nhiễu.
// Có thể sửa câu hỏi trong từng môn và độ khó ngay tại các bảng bên dưới.
function makeQuestions(rows) {
  return rows.map(([question, correctAnswer, ...wrongAnswers]) => {
    const answers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    return { question, answers, correct: answers.indexOf(correctAnswer) };
  });
}

const questionBank = {
  english: {
    easy: makeQuestions([
      ["Từ tiếng Anh nào có nghĩa là 'quả táo'?", "apple", "orange", "banana", "grape"],
      ["'Book' có nghĩa là gì?", "quyển sách", "cây bút", "cái bàn", "cửa sổ"],
      ["Chọn từ có nghĩa là 'màu xanh dương'.", "blue", "black", "brown", "green"],
      ["'Good morning' thường được dùng để nói khi nào?", "buổi sáng", "buổi tối", "giữa trưa", "nửa đêm"],
      ["Chọn từ trái nghĩa với 'hot'.", "cold", "warm", "boiling", "sunny"],
      ["Hoàn thành: I ___ a student.", "am", "is", "are", "be"],
      ["Danh từ số nhiều của 'cat' là gì?", "cats", "cates", "caties", "cat's"],
      ["'Thank you' có nghĩa là gì?", "Cảm ơn bạn", "Xin lỗi", "Tạm biệt", "Chào buổi sáng"],
      ["Chọn từ chỉ một con vật.", "tiger", "table", "teacher", "ticket"],
      ["Hoàn thành: She ___ my friend.", "is", "am", "are", "be"]
    ]),
    medium: makeQuestions([
      ["Hoàn thành: My brother ___ football every Sunday.", "plays", "play", "playing", "played"],
      ["Chọn dạng quá khứ của động từ 'visit'.", "visited", "visiting", "visits", "visites"],
      ["Hoàn thành: There ___ two books on the desk.", "are", "is", "was", "be"],
      ["Chọn câu hỏi đúng cho câu trả lời 'I live in Da Nang.'", "Where do you live?", "When do you live?", "Who do you live?", "What do you live?"],
      ["Hoàn thành: This bag is ___ than that one.", "heavier", "heavy", "heaviest", "more heavy"],
      ["Chọn giới từ đúng: We have English ___ Monday.", "on", "at", "in", "from"],
      ["Hoàn thành: They ___ dinner when I called.", "were having", "have", "are having", "will have"],
      ["Từ nào gần nghĩa nhất với 'begin'?", "start", "finish", "forget", "follow"],
      ["Hoàn thành: How ___ water do you drink each day?", "much", "many", "few", "several"],
      ["Chọn câu dùng thì hiện tại hoàn thành.", "She has finished her homework.", "She finishes her homework.", "She finished her homework.", "She is finishing her homework."]
    ]),
    hard: makeQuestions([
      ["Hoàn thành câu điều kiện loại 1: If it rains, we ___ at home.", "will stay", "would stay", "stayed", "had stayed"],
      ["Chọn câu bị động đúng: 'They built this bridge in 2020.'", "This bridge was built in 2020.", "This bridge is built in 2020.", "This bridge built in 2020.", "This bridge has build in 2020."],
      ["Hoàn thành: She suggested ___ the museum.", "visiting", "to visit", "visit", "visited"],
      ["Chọn mệnh đề quan hệ đúng: The book ___ I borrowed is interesting.", "which", "who", "where", "whose"],
      ["Hoàn thành câu tường thuật: He said he ___ tired.", "was", "is", "will be", "has"],
      ["Chọn từ nối chỉ sự nhượng bộ.", "although", "because", "therefore", "so that"],
      ["Hoàn thành: By next June, they ___ here for five years.", "will have lived", "live", "have lived", "would live"],
      ["Câu nào diễn tả lời khuyên?", "You should revise before the test.", "You can swim very well.", "You must be at school now.", "You may visit us tomorrow."],
      ["Hoàn thành: The more you practise, ___ you become.", "the better", "better", "the best", "best"],
      ["Chọn dạng đúng: I look forward to ___ from you.", "hearing", "hear", "heard", "be hear"]
    ])
  },
  math: {
    easy: makeQuestions([
      ["Tính 18 + 27.", "45", "35", "44", "55"],
      ["Tính 9 × 7.", "63", "56", "72", "67"],
      ["Giải phương trình x + 5 = 12.", "x = 7", "x = 17", "x = 6", "x = 8"],
      ["Một phần tư của 20 là bao nhiêu?", "5", "4", "10", "8"],
      ["Diện tích hình chữ nhật dài 6 cm, rộng 3 cm là bao nhiêu?", "18 cm²", "18 cm", "9 cm²", "12 cm²"],
      ["Số nào là số nguyên tố?", "7", "9", "15", "21"],
      ["Tính 20% của 50.", "10", "5", "20", "25"],
      ["Tổng ba góc trong một tam giác bằng bao nhiêu độ?", "180°", "90°", "270°", "360°"],
      ["Tính giá trị |−8|.", "8", "−8", "0", "16"],
      ["Trung bình cộng của 2, 4 và 6 là bao nhiêu?", "4", "3", "5", "12"]
    ]),
    medium: makeQuestions([
      ["Giải 3x − 4 = 11.", "x = 5", "x = 7", "x = 3", "x = 15"],
      ["Phân tích x² − 9 thành nhân tử.", "(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "x(x − 9)"],
      ["Đỉnh của parabol y = (x − 2)² + 1 là điểm nào?", "(2; 1)", "(−2; 1)", "(2; −1)", "(1; 2)"],
      ["Giải bất phương trình 2x + 1 < 9.", "x < 4", "x > 4", "x < 5", "x > 5"],
      ["Một lớp có 12 nữ và 18 nam. Tỉ lệ nữ của lớp là bao nhiêu?", "40%", "30%", "60%", "66%"],
      ["Tính sin 30°.", "1/2", "√3/2", "1", "0"],
      ["Cho A(1; 2), B(4; 6). Tọa độ vectơ AB là gì?", "(3; 4)", "(5; 8)", "(−3; −4)", "(4; 3)"],
      ["Gieo một xúc xắc đều. Xác suất ra số chẵn là bao nhiêu?", "1/2", "1/3", "1/6", "2/3"],
      ["Giải hệ x + y = 7, x − y = 1.", "x = 4, y = 3", "x = 3, y = 4", "x = 5, y = 2", "x = 2, y = 5"],
      ["Số trung bình của 3, 5, 7, 9 là bao nhiêu?", "6", "5", "7", "24"]
    ]),
    hard: makeQuestions([
      ["Giá trị nhỏ nhất của y = x² − 6x + 11 là bao nhiêu?", "2", "−2", "11", "0"],
      ["Giải phương trình x² − 5x + 6 = 0.", "x = 2 hoặc x = 3", "x = −2 hoặc x = −3", "x = 1 hoặc x = 6", "x = −1 hoặc x = −6"],
      ["Với f(x) = 2x² − 3x + 1, tính f(−1).", "6", "0", "2", "−4"],
      ["Một cấp số cộng có u₁ = 4, công sai d = 3. Tính u₈.", "25", "24", "28", "21"],
      ["Hai vectơ a = (2; 1), b = (−1; 2) có tích vô hướng bằng bao nhiêu?", "0", "−4", "4", "2"],
      ["Gieo hai xúc xắc. Xác suất tổng bằng 7 là bao nhiêu?", "1/6", "1/12", "1/9", "7/36"],
      ["Giải bất phương trình x² − 4x + 3 ≤ 0.", "1 ≤ x ≤ 3", "x ≤ 1 hoặc x ≥ 3", "x < 1", "x > 3"],
      ["Đường thẳng qua (0; 2) và (3; 8) có hệ số góc bằng bao nhiêu?", "2", "3", "1/2", "6"],
      ["Một mẫu số liệu có các giá trị 2, 4, 6, 8 với tần số 1, 2, 1, 2. Số trung bình là bao nhiêu?", "5", "4", "6", "20"],
      ["Nếu cos α = 3/5 và α nhọn, sin α bằng bao nhiêu?", "4/5", "3/4", "5/4", "1/5"]
    ])
  },
  it: {
    easy: makeQuestions([
      ["Bộ phận nào dùng để nhập chữ vào máy tính?", "Bàn phím", "Màn hình", "Loa", "Máy in"],
      ["CPU thường được ví như bộ phận nào của máy tính?", "Bộ não", "Màn hình", "Bộ nhớ ngoài", "Nguồn điện"],
      ["Phần mềm dùng để xem trang web được gọi là gì?", "Trình duyệt", "Bảng tính", "Trình soạn thảo", "Máy chủ in"],
      ["HTML chủ yếu dùng để làm gì?", "Tạo cấu trúc trang web", "Diệt virus", "Tính toán vật lý", "Chỉnh âm thanh"],
      ["Thiết bị nào hiển thị hình ảnh từ máy tính?", "Màn hình", "Chuột", "Micro", "Bàn phím"],
      ["Mật khẩu nào an toàn hơn?", "M7!qP2#v", "123456", "password", "minhanh"],
      ["Tệp có đuôi .jpg thường chứa loại dữ liệu nào?", "Hình ảnh", "Âm thanh", "Bảng tính", "Chương trình"],
      ["Internet là gì?", "Mạng kết nối nhiều máy tính", "Một loại bàn phím", "Một ứng dụng vẽ", "Một hệ điều hành"],
      ["Biểu tượng kính lúp thường dùng để làm gì?", "Tìm kiếm", "Lưu tệp", "Tắt máy", "In trang"],
      ["Đâu là thiết bị xuất dữ liệu?", "Máy in", "Bàn phím", "Chuột", "Micro"]
    ]),
    medium: makeQuestions([
      ["Số nhị phân 1010₂ bằng số thập phân nào?", "10", "8", "12", "5"],
      ["Trong HTML, thẻ nào tạo liên kết?", "<a>", "<p>", "<img>", "<h1>"],
      ["Mục đích chính của CSS là gì?", "Định dạng giao diện trang web", "Lưu cơ sở dữ liệu", "Gửi thư điện tử", "Mã hóa ổ đĩa"],
      ["Thuật toán là gì?", "Các bước hữu hạn để giải một vấn đề", "Một thiết bị lưu trữ", "Tên của trình duyệt", "Một ngôn ngữ đánh dấu"],
      ["Hành động nào giúp tránh lừa đảo qua email?", "Kiểm tra người gửi và liên kết", "Mở mọi tệp đính kèm", "Gửi mật khẩu để xác minh", "Tắt phần mềm bảo vệ"],
      ["Trong bảng tính, công thức thường bắt đầu bằng ký hiệu nào?", "=", "#", "&", "?"],
      ["RAM có đặc điểm nào?", "Lưu dữ liệu tạm khi máy đang chạy", "Lưu dữ liệu vĩnh viễn khi tắt máy", "Là thiết bị nhập", "Chỉ dùng để in"],
      ["Địa chỉ IP có vai trò gì trong mạng?", "Nhận diện thiết bị", "Tăng độ sáng màn hình", "Nén hình ảnh", "Chặn bàn phím"],
      ["Trong lập trình, vòng lặp dùng để làm gì?", "Lặp lại một nhóm lệnh", "Đổi tên tệp", "Mở loa", "Tạo mật khẩu"],
      ["Sao lưu dữ liệu giúp ích gì?", "Khôi phục dữ liệu khi bản chính bị mất", "Làm màn hình lớn hơn", "Tăng tốc độ gõ", "Xóa virus tự động"]
    ]),
    hard: makeQuestions([
      ["Biểu thức logic NOT (A AND B) tương đương biểu thức nào?", "NOT A OR NOT B", "NOT A AND NOT B", "A OR B", "A AND NOT B"],
      ["Tìm kiếm nhị phân cần dữ liệu được sắp xếp và có độ phức tạp trung bình nào?", "O(log n)", "O(n²)", "O(n)", "O(1)"],
      ["Khóa chính trong cơ sở dữ liệu dùng để làm gì?", "Phân biệt duy nhất mỗi bản ghi", "Mã hóa toàn bộ bảng", "Sắp xếp màu ô", "Tạo bản sao lưu"],
      ["Với thuật toán tìm kiếm tuyến tính, trường hợp xấu nhất cần kiểm tra bao nhiêu phần tử?", "n phần tử", "log₂ n phần tử", "1 phần tử", "n² phần tử"],
      ["HTTPS bảo vệ dữ liệu truyền chủ yếu bằng cách nào?", "Mã hóa kết nối", "Nén ảnh", "Ẩn địa chỉ web", "Tắt cookie"],
      ["Trong HTML ngữ nghĩa, thẻ <nav> thường chứa nội dung nào?", "Các liên kết điều hướng", "Chân trang", "Ảnh trang trí", "Đoạn mã máy"],
      ["Trong mạng, DNS có nhiệm vụ chính nào?", "Đổi tên miền thành địa chỉ IP", "Nén dữ liệu", "Tạo mật khẩu", "Đo nhiệt độ CPU"],
      ["Nếu một thuật toán có hai vòng lặp lồng nhau cùng chạy n lần, độ phức tạp thường là gì?", "O(n²)", "O(log n)", "O(n)", "O(1)"],
      ["Cách nào phù hợp nhất để lưu mật khẩu người dùng?", "Lưu giá trị băm có muối", "Lưu văn bản thuần", "Gửi qua email", "Lưu trong tên tệp"],
      ["Trong bảng tính, tham chiếu tuyệt đối đến ô A1 được viết thế nào?", "$A$1", "A1", "A$", "#A1"]
    ])
  },
  literature: {
    easy: makeQuestions([
      ["Ai là tác giả của 'Truyện Kiều'?", "Nguyễn Du", "Nguyễn Trãi", "Hồ Xuân Hương", "Nam Cao"],
      ["Tác giả truyện ngắn 'Lão Hạc' là ai?", "Nam Cao", "Ngô Tất Tố", "Kim Lân", "Thạch Lam"],
      ["'Dế Mèn phiêu lưu ký' do nhà văn nào sáng tác?", "Tô Hoài", "Tạ Duy Anh", "Nguyễn Nhật Ánh", "Vũ Trọng Phụng"],
      ["Ai viết truyện ngắn 'Vợ nhặt'?", "Kim Lân", "Nam Cao", "Nguyễn Công Hoan", "Nguyễn Minh Châu"],
      ["'Tắt đèn' là tác phẩm của nhà văn nào?", "Ngô Tất Tố", "Nguyễn Du", "Kim Lân", "Thạch Lam"],
      ["Tác giả bài thơ 'Đây thôn Vĩ Dạ' là ai?", "Hàn Mặc Tử", "Xuân Diệu", "Huy Cận", "Tố Hữu"],
      ["'Chiếc lược ngà' do ai viết?", "Nguyễn Quang Sáng", "Nguyễn Thành Long", "Nguyễn Minh Châu", "Phạm Tiến Duật"],
      ["Tác giả của 'Lặng lẽ Sa Pa' là ai?", "Nguyễn Thành Long", "Kim Lân", "Tô Hoài", "Nguyễn Du"],
      ["Ai là tác giả bài thơ 'Đồng chí'?", "Chính Hữu", "Tố Hữu", "Quang Dũng", "Chế Lan Viên"],
      ["'Nhật ký trong tù' gắn với tác giả nào?", "Hồ Chí Minh", "Tố Hữu", "Nguyễn Trãi", "Phan Bội Châu"]
    ]),
    medium: makeQuestions([
      ["Nhân vật chính trong 'Vợ nhặt' là ai?", "Tràng", "Chí Phèo", "Ông Hai", "Anh thanh niên"],
      ["Trong 'Lão Hạc', con chó của lão có tên là gì?", "Cậu Vàng", "Mực", "Vện", "Bấc"],
      ["Bài thơ 'Đồng chí' chủ yếu viết về tình cảm nào?", "Tình đồng đội của người lính", "Tình mẹ con", "Tình yêu quê hương thời bình", "Tình bạn học trò"],
      ["Truyện 'Lặng lẽ Sa Pa' đặt nhân vật anh thanh niên làm công việc gì?", "Đo khí tượng trên núi", "Dạy học ở bản", "Lái xe đường dài", "Trồng rừng"],
      ["Thể thơ chính của 'Truyện Kiều' là gì?", "Lục bát", "Song thất lục bát", "Thất ngôn bát cú", "Tự do"],
      ["Nhân vật chị Dậu xuất hiện trong tác phẩm nào?", "Tắt đèn", "Lão Hạc", "Vợ nhặt", "Chí Phèo"],
      ["Không gian chính trong bài 'Đây thôn Vĩ Dạ' gợi nhắc địa danh nào?", "Huế", "Hà Nội", "Sa Pa", "Đà Lạt"],
      ["'Chiếc lược ngà' tập trung thể hiện tình cảm nào?", "Tình cha con", "Tình thầy trò", "Tình đồng nghiệp", "Tình anh em"],
      ["Biện pháp tu từ so sánh thường có dấu hiệu nào?", "Đặt hai sự vật có nét tương đồng cạnh nhau", "Lặp phụ âm đầu", "Nói giảm mức độ", "Gọi vật bằng tên khác"],
      ["Ngôi kể thứ nhất thường dùng đại từ nào?", "Tôi", "Họ", "Nó", "Chúng nó"]
    ]),
    hard: makeQuestions([
      ["Tình huống truyện 'Vợ nhặt' làm nổi bật điều gì?", "Khát vọng sống và tình người giữa nạn đói", "Sự giàu sang của phố thị", "Cuộc sống chiến trường", "Mâu thuẫn trong gia đình địa chủ"],
      ["Chi tiết bát cháo cám trong 'Vợ nhặt' chủ yếu gợi điều gì?", "Cái nghèo khốn cùng nhưng vẫn có tình thương", "Sự sung túc của gia đình", "Niềm vui hội hè", "Sự xa cách giữa mẹ và con"],
      ["Qua nhân vật Chí Phèo, Nam Cao đặt ra vấn đề trung tâm nào?", "Bi kịch bị cự tuyệt quyền làm người", "Khát vọng làm giàu", "Cuộc sống của người lính", "Sự đổi thay của thiên nhiên"],
      ["Trong 'Lão Hạc', việc bán cậu Vàng cho thấy phẩm chất nào của lão?", "Tình thương con và lòng tự trọng", "Tham vọng quyền lực", "Sự vô tâm", "Ham muốn danh tiếng"],
      ["Hình ảnh 'đầu súng trăng treo' trong 'Đồng chí' kết hợp hai phương diện nào?", "Hiện thực chiến đấu và tâm hồn lãng mạn", "Cuộc sống thành thị và nông thôn", "Quá khứ và tương lai", "Niềm vui và sự hài hước"],
      ["Tác dụng nổi bật của điểm nhìn trần thuật trong 'Vợ nhặt' là gì?", "Theo sát tâm trạng nhân vật và tạo niềm cảm thông", "Che giấu hoàn toàn diễn biến", "Chỉ kể sự kiện lịch sử", "Tạo giọng kể khoa học"],
      ["Ngôn ngữ thơ 'Đây thôn Vĩ Dạ' nổi bật bởi sắc thái nào?", "Trong trẻo mà man mác khắc khoải", "Hào sảng và quyết liệt", "Châm biếm và dữ dội", "Khô khan và lý luận"],
      ["Một tác phẩm được xem là truyện ngắn chủ yếu vì đặc điểm nào?", "Dung lượng gọn, tập trung vào một tình huống", "Luôn được viết bằng thơ", "Chỉ có một nhân vật", "Không có cốt truyện"],
      ["Khi phân tích nhân vật văn học, cách nào thuyết phục nhất?", "Dựa vào hành động, lời nói và chi tiết tiêu biểu", "Chỉ kể lại cốt truyện", "Chỉ nêu cảm xúc cá nhân", "Chỉ chép tiểu sử tác giả"],
      ["Giọng điệu trữ tình trong thơ thường giúp thể hiện điều gì?", "Cảm xúc và thái độ của chủ thể trữ tình", "Sơ đồ sự kiện", "Lý lịch nhân vật", "Quy tắc ngữ pháp"]
    ])
  },
  science: {
    easy: makeQuestions([
      ["Công thức hóa học của nước là gì?", "H₂O", "CO₂", "O₂", "NaCl"],
      ["Đơn vị đo lực trong hệ SI là gì?", "Niutơn (N)", "Jun (J)", "Oát (W)", "Pascal (Pa)"],
      ["Chất nào là khí cần thiết cho sự hô hấp của con người?", "Oxi", "Nitơ", "Hiđro", "Cacbonic"],
      ["Nước đá chuyển thành nước lỏng gọi là quá trình gì?", "Nóng chảy", "Đông đặc", "Ngưng tụ", "Bay hơi"],
      ["Nguyên tử gồm hạt nhân và lớp vỏ chứa hạt nào?", "Electron", "Neutron", "Proton", "Phân tử"],
      ["Dụng cụ nào đo nhiệt độ?", "Nhiệt kế", "Lực kế", "Ampe kế", "Thước dây"],
      ["Tốc độ được tính bằng công thức nào?", "Quãng đường chia thời gian", "Thời gian chia quãng đường", "Khối lượng nhân thể tích", "Lực chia diện tích"],
      ["Dung dịch có pH nhỏ hơn 7 thường có tính chất gì?", "Axit", "Bazơ", "Trung tính", "Kim loại"],
      ["Dòng điện trong kim loại là dòng chuyển dời có hướng của hạt nào?", "Electron", "Proton", "Neutron", "Nguyên tử"],
      ["Muối ăn có công thức hóa học nào?", "NaCl", "HCl", "NaOH", "CaCO₃"]
    ]),
    medium: makeQuestions([
      ["Một vật đi 120 m trong 20 s. Tốc độ của vật là bao nhiêu?", "6 m/s", "4 m/s", "10 m/s", "24 m/s"],
      ["Khối lượng mol của CO₂ xấp xỉ bằng bao nhiêu?", "44 g/mol", "28 g/mol", "32 g/mol", "18 g/mol"],
      ["Một vật có khối lượng 2 kg, g ≈ 10 m/s². Trọng lượng của vật là bao nhiêu?", "20 N", "2 N", "10 N", "200 N"],
      ["Dung dịch làm quỳ tím hóa đỏ thường là dung dịch nào?", "Axit", "Bazơ", "Muối trung tính", "Nước cất"],
      ["Trong mạch nối tiếp, cường độ dòng điện tại các vị trí có đặc điểm gì?", "Bằng nhau", "Luôn bằng 0", "Tăng dần", "Tỉ lệ với chiều dài dây"],
      ["Phản ứng giữa axit và bazơ thường tạo ra gì?", "Muối và nước", "Oxi và hiđro", "Kim loại và oxi", "Chỉ có khí"],
      ["Một vật chuyển động đều 5 m/s trong 8 s. Quãng đường đi được là bao nhiêu?", "40 m", "13 m", "3 m", "45 m"],
      ["Nguyên tố có số hiệu nguyên tử 8 là nguyên tố nào?", "Oxi", "Cacbon", "Nitơ", "Lưu huỳnh"],
      ["Công thức tính công cơ học khi lực cùng hướng chuyển dời là gì?", "A = F.s", "A = F/s", "A = m/V", "A = U.I.t²"],
      ["Khí CO₂ làm nước vôi trong có hiện tượng gì?", "Vẩn đục", "Chuyển xanh", "Sủi oxi", "Không đổi màu và trong hơn"]
    ]),
    hard: makeQuestions([
      ["Điện trở 6 Ω mắc vào hiệu điện thế 12 V. Cường độ dòng điện là bao nhiêu?", "2 A", "0,5 A", "18 A", "72 A"],
      ["Đốt cháy hoàn toàn 12 g cacbon theo C + O₂ → CO₂. Khối lượng CO₂ tạo thành là bao nhiêu?", "44 g", "28 g", "32 g", "12 g"],
      ["Một vật rơi tự do từ nghỉ trong 2 s, lấy g = 10 m/s². Vận tốc cuối là bao nhiêu?", "20 m/s", "10 m/s", "5 m/s", "40 m/s"],
      ["Pha loãng 100 ml dung dịch HCl 2 M thành 500 ml. Nồng độ mới là bao nhiêu?", "0,4 M", "1 M", "2,5 M", "10 M"],
      ["Hai điện trở 4 Ω và 6 Ω mắc nối tiếp. Điện trở tương đương là bao nhiêu?", "10 Ω", "2,4 Ω", "1,5 Ω", "24 Ω"],
      ["Trong phản ứng Zn + 2HCl → ZnCl₂ + H₂, chất nào bị oxi hóa?", "Zn", "HCl", "ZnCl₂", "H₂"],
      ["Một vật có khối lượng 0,5 kg chuyển động 4 m/s. Động năng của vật là bao nhiêu?", "4 J", "2 J", "8 J", "16 J"],
      ["Số mol trong 9 g nước H₂O (M = 18 g/mol) là bao nhiêu?", "0,5 mol", "2 mol", "9 mol", "18 mol"],
      ["Một máy có công suất 100 W hoạt động 60 s. Công thực hiện là bao nhiêu?", "6000 J", "160 J", "600 J", "0,6 J"],
      ["Trong phản ứng tỏa nhiệt, hệ phản ứng truyền năng lượng chủ yếu theo hướng nào?", "Truyền nhiệt ra môi trường", "Thu nhiệt từ môi trường", "Không trao đổi năng lượng", "Chỉ tạo ra ánh sáng"]
    ])
  }
};