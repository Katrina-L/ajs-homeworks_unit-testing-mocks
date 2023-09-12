import {getLevel} from "../getLevel";
import fetchData from "../http";

// const dataList = [
//     ["https://server/user/16", 16, 7],
//     ["https://server/user/'", '', 'Mock this!'],
// ];

jest.mock("../http");

beforeEach( () => {
    jest.resetAllMocks();
} );

// test.each(dataList)("", (urlTest, userIdTest, expectedLevel) => {
//     fetchData.mockReturnValue(JSON.stringify({}));
//     getLevel(userIdTest);
//     expect(fetchData).toBeCalledWith(urlTest);
// });

test("", () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel(16);
    expect(fetchData).toBeCalledWith("https://server/user/16");
});

// test("", () => {
//     fetchData.mockReturnValue(JSON.stringify({}));
//     jest.getLevel(NaN);
//     expect( () => {
//         fetchData(" ");
//     }).toThrow('Mock this!');
// });


