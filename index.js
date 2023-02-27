console.log('Hello World!')

const express = require('express')
const app = express()
const port = 4000

app.use(express.urlencoded({ extended: false }))
// This code used to use req.body.somthing to acess to body of data


const engQuest = [

  {
    "ansA": "Khoảng thời gian",
    "ansB": "Cấu trúc",
    "ansC": "Phân tích",
    "ansD": "Rõ ràng",
    "correction": "Khoảng thời gian",
    "id": "1",
    "question": "Intervals"
  },
  {
    "ansA": "Tấm",
    "ansB": "Rõ ràng",
    "ansC": "Phân tích",
    "ansD": "Đánh giá",
    "correction": "Đánh giá",
    "id": "2",
    "question": "Evaluate"
  },
  {
    "ansA": "Tấm",
    "ansB": "Cấu trúc",
    "ansC": "Phân tích",
    "ansD": "Xơ vải đáng kể",
    "correction": "Xơ vải đáng kể",
    "id": "3",
    "question": "Substantial lint"
  },
  {
    "ansA": "Địa điểm",
    "ansB": "Phá vỡ, sự phá vỡ",
    "ansC": "Vừa phải",
    "ansD": "Chất tẩy rửa",
    "correction": "Phá vỡ, sự phá vỡ",
    "id": "4",
    "question": "Rupture"
  },
  {
    "ansA": "May mắn",
    "ansB": "Sự đứt gãy & đàn hồi",
    "ansC": "Khủng hoảng",
    "ansD": "Quốc tế",
    "correction": "Sự đứt gãy & đàn hồi",
    "id": "5",
    "question": "Breaking elongation"
  },
  {
    "ansA": "Đồ uống",
    "ansB": "Sát khuẩn",
    "ansC": "Kiểm tra độ bền khi kéo",
    "ansD": "Chất tẩy rửa",
    "correction": "Kiểm tra độ bền khi kéo",
    "id": "6",
    "question": "Tougue tear test"
  },
  {
    "ansA": "Thiên tài",
    "ansB": "Độ bền màu",
    "ansC": "Keo ép",
    "ansD": "Thuỷ phân",
    "correction": "Độ bền màu",
    "id": "7",
    "question": "Migration fastness"
  },
  {
    "ansA": "Bảo trì",
    "ansB": "Phá vỡ, sự phá vỡ",
    "ansC": "Vừa phải",
    "ansD": "Chất hoá học",
    "correction": "Bảo trì",
    "id": "8",
    "question": "Maintance"
  },
  {
    "ansA": "Địa điểm",
    "ansB": "Hôm kia",
    "ansC": "Vừa phải",
    "ansD": "Căn hộ",
    "correction": "Căn hộ",
    "id": "9",
    "question": "Department"
  },
  {
    "ansA": "Trái đất",
    "ansB": "Phá vỡ, sự phá vỡ",
    "ansC": "Sự dịch chuyển",
    "ansD": "Chất tẩy rửa",
    "correction": "Sự dịch chuyển",
    "id": "10",
    "question": "Movement"
  },
  {
    "ansA": "Địa điểm",
    "ansB": "Ngày mai",
    "ansC": "Vừa phải",
    "ansD": "Chính Phủ",
    "correction": "Chính Phủ",
    "id": "11",
    "question": "Goverment"
  },
  {
    "ansA": "Phân tích (n)",
    "ansB": "Phân tử",
    "ansC": "Thống kê",
    "ansD": "Tấm",
    "correction": "Phân tích (n)",
    "id": "12",
    "question": "Analysis"
  },
  {
    "ansA": "Bổ sung",
    "ansB": "Làm ngập",
    "ansC": "Đổ đầy vào",
    "ansD": "Độ bền màu",
    "correction": "Làm ngập",
    "id": "13",
    "question": "Submerge"
  },
  {
    "ansA": "Trợ lý cá nhân",
    "ansB": "Máy ảnh Sony",
    "ansC": "Điện thoại rảnh tay",
    "ansD": "Máy ảnh chi tiết",
    "correction": "Trợ lý cá nhân",
    "question": "Personal digital assistant",
    "id": "14"
  },
  {
    "ansA": "Công thức",
    "ansB": "Sự phân loại",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Máy kỹ thuật số",
    "correction": "Sự phân loại",
    "question": "Separation",
    "id": "15"
  },
  {
    "ansA": "Tấm",
    "ansB": "Máy quay",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Trợ lý kỹ thuật cá nhân",
    "correction": "Máy ảnh kỹ thuật số",
    "question": "Digital camera",
    "id": "16"
  },
  {
    "ansA": "Máy ảnh Sony",
    "ansB": "Máy ảnh kỹ thuật số",
    "ansC": "Thỏ",
    "ansD": "Tấm",
    "correction": "Thỏ",
    "question": "Rabit",
    "id": "17"
  },
  {
    "ansA": "Trâu",
    "ansB": "Phân tích",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Điện thoại cổ điển",
    "correction": "Trâu",
    "question": "Buffalo",
    "id": "18"
  },
  {
    "ansA": "Tấm",
    "ansB": "Điện thoại cổ điển",
    "ansC": "Máy ảnh chi tiết",
    "ansD": "Chắc chắn",
    "correction": "Chắc chắn",
    "question": "Definitely",
    "id": "19"
  },
  {
    "ansA": "Đánh giá",
    "ansB": "Máy nghe nhạc",
    "ansC": "Trâu",
    "ansD": "Điện thoại rảnh tay",
    "correction": "Điện thoại rảnh tay",
    "question": "Hand free phone",
    "id": "20"
  },
  {
    "ansA": "Trợ lý kỹ thuật cá nhân",
    "ansB": "Máy ảnh kỹ thuật số",
    "ansC": "Cao su",
    "ansD": "Đánh giá",
    "correction": "Cao su",
    "question": "Rubber",
    "id": "21"
  },
  {
    "ansA": "Cao su",
    "ansB": "Máy ảnh kỹ thuật số",
    "ansC": "Thông tin cá nhân",
    "ansD": "Điện thoại rảnh tay",
    "correction": "Thông tin cá nhân",
    "question": "Personal information",
    "id": "22"
  },
  {
    "ansA": "Máy ảnh kỹ thuật số",
    "ansB": "Câu lạc bộ",
    "ansC": "Phân tích",
    "ansD": "Máy quay",
    "correction": "Câu lạc bộ",
    "question": "Club",
    "id": "23"
  },
  {
    "ansA": "Máy quay",
    "ansB": "Mở lên",
    "ansC": "Điện thoại rảnh tay",
    "ansD": "Máy nghe nhạc",
    "correction": "Mở lên",
    "question": "Turn on",
    "id": "24"
  },
  {
    "ansA": "Đánh giá",
    "ansB": "Toán học",
    "ansC": "Máy nghe nhạc",
    "ansD": "Máy quay",
    "correction": "Toán học",
    "question": "Math",
    "id": "25"
  },
  {
    "ansA": "Tấm",
    "ansB": "Báo cáo",
    "ansC": "Máy ảnh chi tiết",
    "ansD": "Đánh giá",
    "correction": "Báo cáo",
    "question": "Report",
    "id": "26"
  },
  {
    "ansA": "Trợ lý kỹ thuật cá nhân",
    "ansB": "Mở lên",
    "ansC": "Ồn ào",
    "ansD": "Máy ảnh Sony",
    "correction": "Ồn ào",
    "question": "Noisy",
    "id": "27"
  },
  {
    "ansA": "Máy ảnh chi tiết",
    "ansB": "Sự trình diễn",
    "ansC": "Máy ảnh chi tiết",
    "ansD": "Trợ lý ảo",
    "correction": "Sự trình diễn",
    "question": "Performance",
    "id": "28"
  },
  {
    "ansA": "Tấm",
    "ansB": "Điện thoại bàn",
    "ansC": "Máy ảnh chi tiết",
    "ansD": "Công thức",
    "correction": "Công thức",
    "question": "Formula",
    "id": "29"
  },
  {
    "ansA": "Công thức",
    "ansB": "Không khí",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Điện thoại bàn",
    "correction": "Không khí",
    "question": "The air",
    "id": "30"
  },
  {
    "ansA": "Sự trình diễn",
    "ansB": "Máy kỹ thuật số",
    "ansC": "Phân tích",
    "ansD": "Trang mạng xã hội",
    "correction": "Trang mạng xã hội",
    "question": "Social networking sites",
    "id": "31"
  },
  {
    "ansA": "Máy nghe nhạc",
    "ansB": "Trợ lý ảo",
    "ansC": "Thông tin cá nhân",
    "ansD": "Trang bị kiến thức",
    "correction": "Trang bị kiến thức",
    "question": "Knowledge preparation",
    "id": "32"
  },
  {
    "ansA": "Bề mặt",
    "ansB": "Câu lạc bộ",
    "ansC": "Ồn ào",
    "ansD": "Trang bị kiến thức",
    "correction": "Bề mặt",
    "question": "Surface",
    "id": "33"
  },
  {
    "ansA": "Bề mặt",
    "ansB": "Phía sau",
    "ansC": "Phía trước",
    "ansD": "Ở giữa",
    "correction": "Phía trước",
    "question": "In front of",
    "id": "34"
  },
  {
    "ansA": "Những giá trị",
    "ansB": "Trang bị kiến thức",
    "ansC": "Điện thoại cổ điển",
    "ansD": "Trợ lý ảo",
    "correction": "Những giá trị",
    "question": "Values",
    "id": "35"
  },
  {
    "ansA": "Hoàn thành",
    "ansB": "Cao su",
    "ansC": "Bề mặt",
    "ansD": "Tiểu sử",
    "correction": "Tiểu sử",
    "question": "Profile",
    "id": "36"
  },
  {
    "ansA": "Cao su",
    "ansB": "Bến cảng",
    "ansC": "Hoàn thành",
    "ansD": "Lương tháng",
    "correction": "Bến cảng",
    "question": "Pier",
    "id": "37"
  },
  {
    "ansA": "Ở trong góc",
    "ansB": "Đánh giá",
    "ansC": "Sự trình diễn",
    "ansD": "Không khí",
    "correction": "Ở trong góc",
    "question": "At the corner",
    "id": "38"
  },
  {
    "ansA": "Trang bị kiến thức",
    "ansB": "Bằng cấp",
    "ansC": "Không khí",
    "ansD": "Công nghệ",
    "correction": "Bằng cấp",
    "question": "Qualification",
    "id": "39"
  },
  {
    "ansA": "Đánh giá",
    "ansB": "Thuộc về truyền thống",
    "ansC": "Máy ảnh Sony",
    "ansD": "Bến cảng",
    "correction": "Thuộc về truyền thống",
    "question": "Traditional",
    "id": "40"
  },
  {
    "ansA": "Chính trị",
    "ansB": "Không khí",
    "ansC": "Sự phân loại",
    "ansD": "Những giá trị",
    "correction": "Chính trị",
    "question": "Politics",
    "id": "41"
  },
  {
    "ansA": "Toàn cầu",
    "ansB": "Máy ảnh chi tiết",
    "ansC": "Câu lạc bộ",
    "ansD": "Bề mặt",
    "correction": "Toàn cầu",
    "question": "Global",
    "id": "42"
  },
  {
    "ansA": "Công thức",
    "ansB": "Máy ảnh chi tiết",
    "ansC": "Bóng bàn",
    "ansD": "Những giá trị",
    "correction": "Bóng bàn",
    "question": "Table tennis ",
    "id": "43"
  },
  {
    "ansA": "Phân tích",
    "ansB": "Đánh giá",
    "ansC": "Máy ảnh Sony",
    "ansD": "Chết tiệt",
    "correction": "Chết tiệt",
    "question": "Dann",
    "id": "44"
  },
  {
    "ansA": "Mở lên",
    "ansB": "Chết tiệt",
    "ansC": "Sự nghiệp",
    "ansD": "Công nghệ",
    "correction": "Sự nghiệp",
    "question": "Career",
    "id": "45"
  },
  {
    "ansA": "Máy quay",
    "ansB": "Bức tường",
    "ansC": "Máy ảnh Sony",
    "ansD": "Cao su",
    "correction": "Bức tường",
    "question": "Wall",
    "id": "46"
  },
  {
    "ansA": "Dưa hấu",
    "ansB": "Phân tích",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Hiện tại",
    "correction": "Hiện tại",
    "question": "Present",
    "id": "47"
  },
  {
    "ansA": "Báo cáo",
    "ansB": "Máy ảnh chi tiết",
    "ansC": "Quá khứ",
    "ansD": "Mở lên",
    "correction": "Quá khứ",
    "question": "The past",
    "id": "48"
  },
  {
    "ansA": "Đánh giá",
    "ansB": "Sự trình diễn",
    "ansC": "Tương lai",
    "ansD": "Lương tháng",
    "correction": "Tương lai",
    "question": "Future",
    "id": "49"
  },
  {
    "ansA": "Người thông minh",
    "ansB": "Bến cảng",
    "ansC": "Cao su",
    "ansD": "Mở lên",
    "correction": "Người thông minh",
    "question": "Smart people",
    "id": "50"
  },
  {
    "ansA": "Toán học",
    "ansB": "Hoàn thành",
    "ansC": "Hàng xóm",
    "ansD": "Máy ảnh kỹ thuật số",
    "correction": "Hàng xóm",
    "question": "Neighbor",
    "id": "51"
  },
  {
    "ansA": "Thuộc về truyền thống",
    "ansB": "Ấn tượng",
    "ansC": "Đánh giá",
    "ansD": "Tấm",
    "correction": "Ấn tượng",
    "question": "Impressive",
    "id": "52"
  },
  {
    "ansA": "Trang mạng xã hội",
    "ansB": "Điện thoại bàn",
    "ansC": "Máy ảnh Sony",
    "ansD": "Hướng nam",
    "correction": "Hướng nam",
    "question": "South",
    "id": "53"
  },
  {
    "ansA": "Hướng bắc",
    "ansB": "Bức tường",
    "ansC": "Sự phân loại",
    "ansD": "Cao su",
    "correction": "Hướng bắc",
    "question": "North",
    "id": "54"
  },
  {
    "ansA": "Hiện tại",
    "ansB": "Máy nghe nhạc",
    "ansC": "Toàn cầu",
    "ansD": "Sự thay thế",
    "correction": "Sự thay thế",
    "question": "Replacement",
    "id": "55"
  },
  {
    "ansA": "Thuộc về truyền thống",
    "ansB": "Điện thoại bàn",
    "ansC": "Điện thoại rảnh tay",
    "ansD": "Năng lực",
    "correction": "Năng lực",
    "question": "Potential",
    "id": "56"
  },
  {
    "ansA": "Tự làm điều đó",
    "ansB": "Điện thoại cổ điển",
    "ansC": "Quá khứ",
    "ansD": "Ở trong góc",
    "correction": "Tự làm điều đó",
    "question": "Do it yourself",
    "id": "57"
  },
  {
    "ansA": "Điện thoại cổ điển",
    "ansB": "Tương lai",
    "ansC": "Cao su",
    "ansD": "Thái độ",
    "correction": "Thái độ",
    "question": "Attitude",
    "id": "58"
  },
  {
    "ansA": "Toàn cầu",
    "ansB": "Hoàn thành",
    "ansC": "Tương lai",
    "ansD": "Hóa học",
    "correction": "Hóa học",
    "question": "Chemical",
    "id": "59"
  },
  {
    "ansA": "Hóa học",
    "ansB": "Trợ lý kỹ thuật cá nhân",
    "ansC": "Màn hình hiển thị",
    "ansD": "Thuộc về truyền thống",
    "correction": "Màn hình hiển thị",
    "question": "Display screen",
    "id": "60"
  },
  {
    "ansA": "Từ mới",
    "ansB": "Người thông minh",
    "ansC": "Máy nghe nhạc",
    "ansD": "Tự làm điều đó",
    "correction": "Từ mới",
    "question": "Vocabulary",
    "id": "61"
  },
  {
    "ansA": "Thuyền trưởng",
    "ansB": "Thái độ",
    "ansC": "Câu lạc bộ",
    "ansD": "Tiểu sử",
    "correction": "Thuyền trưởng",
    "question": "Captain",
    "id": "62"
  },
  {
    "ansA": "Bức tường",
    "ansB": "Hàng xóm",
    "ansC": "Máy tính cầm tay",
    "ansD": "Thuyền trưởng",
    "correction": "Máy tính cầm tay",
    "question": "Calculator",
    "id": "63"
  },
  {
    "ansA": "Ấn tượng",
    "ansB": "Ấn tượng",
    "ansC": "Yêu cầu",
    "ansD": "Bóng bàn",
    "correction": "Yêu cầu",
    "question": "Request",
    "id": "64"
  },
  {
    "ansA": "Thuộc về truyền thống",
    "ansB": "Máy quay",
    "ansC": "Sự thay thế",
    "ansD": "Kết quả",
    "correction": "Kết quả",
    "question": "Result",
    "id": "65"
  },
  {
    "ansA": "Máy ảnh Sony",
    "ansB": "Viết chữ in hoa",
    "ansC": "Điện thoại rảnh tay",
    "ansD": "Toán học",
    "correction": "Viết chữ in hoa",
    "question": "Capitalize",
    "id": "66"
  },
  {
    "ansA": "Ở trong góc",
    "ansB": "Sự phân loại",
    "ansC": "Toán học",
    "ansD": "Bác sỹ",
    "correction": "Bác sỹ",
    "question": "Doctor",
    "id": "67"
  },
  {
    "ansA": "Báo cáo",
    "ansB": "Bề mặt",
    "ansC": "Người thông minh",
    "ansD": "Sức mạnh vô cực",
    "correction": "Sức mạnh vô cực",
    "question": "Infinity strength",
    "id": "68"
  },
  {
    "ansA": "Triển khai quân lính",
    "ansB": "Tương lai",
    "ansC": "Những giá trị",
    "ansD": "Tự làm điều đó",
    "correction": "Triển khai quân lính",
    "question": "Armies deployed",
    "id": "69"
  },
  {
    "ansA": "Khoa học vật lý",
    "ansB": "Hướng bắc",
    "ansC": "Hóa học",
    "ansD": "Công nghệ",
    "correction": "Khoa học vật lý",
    "question": "Physical science",
    "id": "70"
  },
  {
    "ansA": "Game thủ chuyên nghiệp",
    "ansB": "Chính trị",
    "ansC": "Những giá trị",
    "ansD": "Không khí",
    "correction": "Game thủ chuyên nghiệp",
    "question": "Professional gamer",
    "id": "71"
  },
  {
    "ansA": "Ngoại ngữ rất thuận tiện",
    "ansB": "Màn hình hiển thị",
    "ansC": "Điện thoại cổ điển",
    "ansD": "Những giá trị",
    "correction": "Ngoại ngữ rất thuận tiện",
    "question": "Language is much convenient",
    "id": "72"
  },
  {
    "ansA": "Sản phẩm thủ công",
    "ansB": "Thuyền trưởng",
    "ansC": "Ấn tượng",
    "ansD": "Sự trình diễn",
    "correction": "Sản phẩm thủ công",
    "question": "Handicraft",
    "id": "73"
  },
  {
    "ansA": "Công xưởng",
    "ansB": "Làm việc",
    "ansC": "Phân tích",
    "ansD": "Cửa hàng",
    "correction": "Công xưởng",
    "question": "Workshop",
    "id": "74"
  },
  {
    "ansA": "Lương tháng",
    "ansB": "Tương lai",
    "ansC": "Thuộc về nước ngoài",
    "ansD": "Chính trị",
    "correction": "Thuộc về nước ngoài",
    "question": "Foreign (a)",
    "id": "75"
  },
  {
    "ansA": "Người ngoại quốc",
    "ansB": "Câu lạc bộ",
    "ansC": "Hiện tại",
    "ansD": "Trang mạng xã hội",
    "correction": "Người ngoại quốc",
    "question": "Foreigner",
    "id": "76"
  },
  {
    "ansA": "Thuộc về truyền thống",
    "ansB": "Điện thoại bàn",
    "ansC": "Hướng nam",
    "ansD": "Trao đổi thư từ",
    "correction": "Trao đổi thư từ",
    "question": "Correspond",
    "id": "77"
  },
  {
    "ansA": "Chết tiệt",
    "ansB": "Câu lạc bộ",
    "ansC": "Gây ấn tượng",
    "ansD": "Hóa học",
    "correction": "Gây ấn tượng",
    "question": "Impress (v)",
    "id": "78"
  },
  {
    "ansA": "Trường tiểu học",
    "ansB": "Năng lực",
    "ansC": "Ồn ào",
    "ansD": "Lương tháng",
    "correction": "Trường tiểu học",
    "question": "Primary school",
    "id": "79"
  },
  {
    "ansA": "Bóng bàn",
    "ansB": "Trường trung học",
    "ansC": "Trang bị kiến thức",
    "ansD": "Điện thoại cổ điển",
    "correction": "Trường trung học",
    "question": "Secondary school",
    "id": "80"
  },
  {
    "ansA": "Hóa học",
    "ansB": "Toàn cầu",
    "ansC": "Hiệp hội",
    "ansD": "Máy quay",
    "correction": "Hiệp hội",
    "question": "Association",
    "id": "81"
  },
  {
    "ansA": "Triển khai quân lính",
    "ansB": "Yêu cầu",
    "ansC": "Sự nghiệp",
    "ansD": "Chia ra",
    "correction": "Chia ra",
    "question": "Divide into",
    "id": "82"
  },
  {
    "ansA": "Màn hình hiển thị",
    "ansB": "Đền chùa, đình",
    "ansC": "Trường trung học",
    "ansD": "Hiện tại",
    "correction": "Đền chùa, đình",
    "question": "Temple",
    "id": "83"
  },
  {
    "ansA": "Người thông minh",
    "ansB": "Công xưởng",
    "ansC": "Yêu cầu",
    "ansD": "Vùng, miền",
    "correction": "Vùng, miền",
    "question": "Region",
    "id": "84"
  },
  {
    "ansA": "Những giá trị",
    "ansB": "Trường tiểu học",
    "ansC": "Điện thoại cổ điển",
    "ansD": "Thuộc về nhiệt đới",
    "correction": "Thuộc về nhiệt đới",
    "question": "Tropical",
    "id": "85"
  },
  {
    "ansA": "Triển khai quân lính",
    "ansB": "Không khí",
    "ansC": "Khí hậu",
    "ansD": "Thuộc về nhiệt đới",
    "correction": "Khí hậu",
    "question": "Climate",
    "id": "86"
  },
  {
    "ansA": "Thuộc về truyền thống",
    "ansB": "Đánh giá",
    "ansC": "Một cách rộng rãi",
    "ansD": "Máy ảnh kỹ thuật số",
    "correction": "Một cách rộng rãi",
    "question": "Widely (a)",
    "id": "87"
  },
  {
    "ansA": "Bắt buộc",
    "ansB": "Bề mặt",
    "ansC": "Toàn cầu",
    "ansD": "Từ mới",
    "correction": "Bắt buộc",
    "question": "Compulsory (a)",
    "id": "88"
  },
  {
    "ansA": "Quốc gia thành viên",
    "ansB": "Hàng xóm",
    "ansC": "Hàng xóm",
    "ansD": "Không khí",
    "correction": "Quốc gia thành viên",
    "question": "Member country",
    "id": "89"
  },
  {
    "ansA": "Bằng cấp",
    "ansB": "Người ngoại quốc",
    "ansC": "Thế kỷ",
    "ansD": "Công xưởng",
    "correction": "Thế kỷ",
    "question": "Century",
    "id": "90"
  },
  {
    "ansA": "Phân tích",
    "ansB": "Chính trị",
    "ansC": "Nhà thơ",
    "ansD": "Lương tháng",
    "correction": "Nhà thơ",
    "question": "Poet",
    "id": "91"
  },
  {
    "ansA": "Bài thơ",
    "ansB": "Sự trình diễn",
    "ansC": "Bức tường",
    "ansD": "Thông tin cá nhân",
    "correction": "Bài thơ",
    "question": "Poem",
    "id": "92"
  },
  {
    "ansA": "Lương tháng",
    "ansB": "Quần áo thông thường",
    "ansC": "Một cách rộng rãi",
    "ansD": "Người ngoại quốc",
    "correction": "Quần áo thông thường",
    "question": "Casual clother",
    "id": "93"
  },
  {
    "ansA": "Máy ảnh kỹ thuật số",
    "ansB": "Dân tộc thiểu số",
    "ansC": "Tương lai",
    "ansD": "Không khí",
    "correction": "Dân tộc thiểu số",
    "question": "Ethnic minority",
    "id": "94"
  },
  {
    "ansA": "Tay áo",
    "ansB": "Trường tiểu học",
    "ansC": "Năng lực",
    "ansD": "Khí hậu",
    "correction": "Tay áo",
    "question": "Sleeve",
    "id": "95"
  },
  {
    "ansA": "Thế kỷ",
    "ansB": "Thuộc về nước ngoài",
    "ansC": "Ký hiệu",
    "ansD": "Những giá trị",
    "correction": "Ký hiệu",
    "question": "Symbol",
    "id": "96"
  },
  {
    "ansA": "Nguồn cảm hứng",
    "ansB": "Thông tin cá nhân",
    "ansC": "Công nghệ",
    "ansD": "Sự phân loại",
    "correction": "Nguồn cảm hứng",
    "question": "Inspiration",
    "id": "97"
  },
  {
    "ansA": "Trợ lý kỹ thuật cá nhân",
    "ansB": "Máy ảnh Sony",
    "ansC": "Chia ra",
    "ansD": "Vật liệu",
    "correction": "Vật liệu",
    "question": "Material",
    "id": "98"
  },
  {
    "ansA": "Độc đáo",
    "ansB": "Vùng, miền",
    "ansC": "Dưa hấu",
    "ansD": "Máy tính cầm tayg",
    "correction": "Độc đáo",
    "question": "Unique",
    "id": "99"
  },
  {
    "ansA": "Thiêu dệt",
    "ansB": "Cao su",
    "ansC": "Máy ảnh kỹ thuật số",
    "ansD": "Trường tiểu học",
    "correction": "Thiêu dệt",
    "question": "Embroider (v)",
    "id": "100"
  }
];
const vnAnswerList = [
  {
    "answer": "Máy ảnh chi tiết",
    "id": "1"
  },
  {
    "answer": "Máy ảnh Sony",
    "id": "2"
  },
  {
    "answer": "Máy ảnh kỹ thuật số",
    "id": "3"
  },
  {
    "answer": "Máy quay",
    "id": "4"
  },
  {
    "answer": "Điện thoại bàn",
    "id": "5"
  },
  {
    "answer": "Điện thoại rảnh tay",
    "id": "6"
  },
  {
    "answer": "Điện thoại cổ điển",
    "id": "7"
  },
  {
    "answer": "Đánh giá",
    "id": "8"
  },
  {
    "answer": "Tấm",
    "id": "9"
  },
  {
    "answer": "Máy kỹ thuật số",
    "id": "10"
  },
  {
    "answer": "Phân tích",
    "id": "11"
  },
  {
    "answer": "Máy nghe nhạc",
    "id": "12"
  },
  {
    "answer": "Trợ lý kỹ thuật cá nhân",
    "id": "13"
  },
  {
    "answer": "Trợ lý ảo",
    "id": "14"
  },
  {
    "answer": "Máy ảnh kỹ thuật số",
    "id": "15"
  },
  {
    "answer": "Cao su",
    "id": "16"
  },
  {
    "answer": "Thông tin cá nhân",
    "id": "17"
  },
  {
    "answer": "Câu lạc bộ",
    "id": "18"
  },
  {
    "answer": "Mở lên",
    "id": "19"
  },
  {
    "answer": "Toán học",
    "id": "20"
  },
  {
    "answer": "Báo cáo",
    "id": "21"
  },
  {
    "answer": "Ồn ào",
    "id": "22"
  },
  {
    "answer": "Sự trình diễn",
    "id": "23"
  },
  {
    "answer": "Công thức",
    "id": "24"
  },
  {
    "answer": "Không khí",
    "id": "25"
  },
  {
    "answer": "Trang mạng xã hội",
    "id": "26"
  },
  {
    "answer": "Trang bị kiến thức",
    "id": "27"
  },
  {
    "answer": "Bề mặt",
    "id": "28"
  },
  {
    "answer": "Những giá trị",
    "id": "29"
  },
  {
    "answer": "Những giá trị",
    "id": "30"
  },
  {
    "answer": "Sự phân loại",
    "id": "31"
  },
  {
    "answer": "Công nghệ",
    "id": "32"
  },
  {
    "answer": "Hoàn thành",
    "id": "33"
  },
  {
    "answer": "Lương tháng",
    "id": "34"
  },
  {
    "answer": "Dưa hấu",
    "id": "35"
  },
  {
    "answer": "Tiểu sử",
    "id": "36"
  },
  {
    "answer": "Bến cảng",
    "id": "37"
  },
  {
    "answer": "Ở trong góc",
    "id": "38"
  },
  {
    "answer": "Bằng cấp",
    "id": "39"
  },
  {
    "answer": "Thuộc về truyền thống",
    "id": "40"
  },
  {
    "answer": "Chính trị",
    "id": "41"
  },
  {
    "answer": "Toàn cầu",
    "id": "42"
  },
  {
    "answer": "Bóng bàn",
    "id": "43"
  },
  {
    "answer": "Chết tiệt",
    "id": "44"
  },
  {
    "answer": "Sự nghiệp",
    "id": "45"
  },
  {
    "answer": "Bức tường",
    "id": "47"
  },
  {
    "answer": "Hiện tại",
    "id": "48"
  },
  {
    "answer": "Quá khứ",
    "id": "49"
  },
  {
    "answer": "Tương lai",
    "id": "50"
  },
  {
    "answer": "Người thông minh",
    "id": "51"
  },
  {
    "answer": "Hàng xóm",
    "id": "52"
  },
  {
    "answer": "Ấn tượng",
    "id": "53"
  },
  {
    "answer": "Hướng nam",
    "id": "54"
  },
  {
    "answer": "Hướng bắc",
    "id": "55"
  },
  {
    "answer": "Sự thay thế",
    "id": "56"
  },
  {
    "answer": "Năng lực",
    "id": "57"
  },
  {
    "answer": "Tự làm điều đó",
    "id": "58"
  },
  {
    "answer": "Thái độ",
    "id": "59"
  },
  {
    "answer": "Hóa học",
    "id": "60"
  },
  {
    "answer": "Màn hình hiển thị",
    "id": "61"
  },
  {
    "answer": "Từ mới",
    "id": "62"
  },
  {
    "answer": "Thuyền trưởng",
    "id": "63"
  },
  {
    "answer": "Máy tính cầm tay",
    "id": "64"
  },
  {
    "answer": "Yêu cầu",
    "id": "65"
  },
  {
    "answer": "Kết quả",
    "id": "66"
  },
  {
    "answer": "Viết chữ in hoa",
    "id": "67"
  },
  {
    "answer": "Bác sỹ",
    "id": "68"
  },
  {
    "answer": "Sức mạnh vô cực",
    "id": "69"
  },
  {
    "answer": "Triển khai quân lính",
    "id": "70"
  },
  {
    "answer": "Khoa học vật lý",
    "id": "71"
  },
  {
    "answer": "Game thủ chuyên nghiệp",
    "id": "72"
  },
  {
    "answer": "Ngoại ngữ rất thuận tiện",
    "id": "73"
  },
  {
    "answer": "Sản phẩm thủ công",
    "id": "74"
  },
  {
    "answer": "Công xưởng",
    "id": "75"
  },
  {
    "answer": "Thuộc về nước ngoài",
    "id": "76"
  },
  {
    "answer": "Người ngoại quốc",
    "id": "77"
  },
  {
    "answer": "Trao đổi thư từ",
    "id": "78"
  },
  {
    "answer": "Gây ấn tượng",
    "id": "79"
  },
  {
    "answer": "Trường tiểu học",
    "id": "80"
  },
  {
    "answer": "Trường trung học",
    "id": "81"
  },
  {
    "answer": "Hiệp hội",
    "id": "82"
  },
  {
    "answer": "Chia ra",
    "id": "83"
  },
  {
    "answer": "Đền chùa, đình",
    "id": "84"
  },
  {
    "answer": "Vùng, miền",
    "id": "85"
  },
  {
    "answer": "Thuộc về nhiệt đới",
    "id": "86"
  },
  {
    "answer": "Khí hậu",
    "id": "87"
  },
  {
    "answer": "Một cách rộng rãi",
    "id": "88"
  },
  {
    "answer": "Bắt buộc",
    "id": "89"
  },
  {
    "answer": "Quốc gia thành viên",
    "id": "90"
  },
  {
    "answer": "Thế kỷ",
    "id": "91"
  },
  {
    "answer": "Nhà thơ",
    "id": "92"
  },
  {
    "answer": "Bài thơ",
    "id": "93"
  },
  {
    "answer": "Quần áo thông thường",
    "id": "94"
  },
  {
    "answer": "Dân tộc thiểu số",
    "id": "95"
  },
  {
    "answer": "Tay áo",
    "id": "96"
  },
  {
    "answer": "Ký hiệu",
    "id": "97"
  },
  {
    "answer": "Nguồn cảm hứng",
    "id": "98"
  },
  {
    "answer": "Vật liệu",
    "id": "99"
  },
  {
    "answer": "Độc đáo",
    "id": "100"
  },
  {
    "answer": "Thiêu dệt",
    "id": "101"
  }
];
const userAccount = [
  {
    "name": "Khôi",
    "score": 347,
    "userName": "userName 1",
    "userPass": "userPass 1",
    "timeLastLogin": "timeLastLogin 1",
    "id": "1"
  }
];


app.get('/', (req, res) => {
  res.send('Welcome to our homepage.')
  // res.send(engQuest)
})
app.get('/engQuest', (req, res) => {
  res.send(engQuest)
})
app.get('/vnAnswerList', (req, res) => {
  res.send(vnAnswerList)
})
app.get('/userAccount', (req, res) => {
  res.send(userAccount);
})

app.get('/about', (req, res) => {
  res.send('Thanks for learning more about us.')
})
// app.post('/engQuest', (req, res) => {
//   res.send(vnAnswerList)  
// })

app.listen(port, () => {
  console.log(`Listening port: ${port}...`)
})
