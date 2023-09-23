import { getLevel } from "../getLevel";
import fetchData from "../http";

jest.mock("../http");

beforeEach( () => {
    jest.resetAllMocks();
} );

test("getLevel with a valid response", () => {
    const mockResponse = {
        status: 'ok',
        level: 7
    };

    fetchData.mockReturnValue(mockResponse);
    const result = getLevel(16);
    expect(fetchData).toBeCalledWith("https://server/user/16");
    expect(result).toBe("Ваш текущий уровень: 7");
});

test("getLevel with an unsuccessfull response", () => {
    const mockResponse = {
        status: 'error'
    };

    fetchData.mockReturnValue(mockResponse);
    const result = getLevel(16);
    expect(fetchData).toBeCalledWith("https://server/user/16");
    expect(result).toBe('Информация об уровне временно недоступна');
});
