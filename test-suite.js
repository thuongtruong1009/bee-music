var tests = require.context("../", true, /-test\.(js|jsx)$/i);
tests.keys().forEach(tests);

var sources = require.context("../../src/", true, /\.(js|jsx)$/i);
sources.keys().forEach(sources);
coverageIstanbulReporter: {
    // Thư mục chứa kết quả report
    dir: 'coverage/',
    // Các kiểu report
    reports: ['html', 'text-summary', 'lcov'],
    // Cấu hình từng kiểu report
    'report-config': {
        html: {
            // outputs the report in ./coverage/html
            subdir: 'html'
        }
    },
    fixWebpackSourcePaths: true,
    // Phần này cài đặt tiêu chuẩn cho các thông số report chúng ta đã bàn ở trên
    thresholds: {
        emitWarning: true, // false thì khi test, test runner sẽ dừng nếu gặp lỗi
        // Thông số chung cho toàn bộ test
        global: {
            statements: 80,
            lines: 80,
            branches: 80,
            functions: 80
        },
        // Thông số cho mỗi file
        each: {
            statements: 80,
            lines: 80,
            branches: 80,
            functions: 80,
            // Một vài trường hợp chúng ta không muốn test nhiều
            overrides: {
                'src/components/**/*.js': {
                    statements: 50,
                    lines: 50,
                    branches: 50,
                    functions: 50,
                }
            }
        }
    },
},