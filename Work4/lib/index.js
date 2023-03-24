"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Домашка');
(() => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = '90';
    const response = yield fetch(`https://intership-liga.ru/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ isCompleted: true }),
    });
    if (!response.ok) {
        console.error('Запрос не удался');
        return null;
    }
    const data = yield response.json();
    console.log(data);
    return data;
}))();
//# sourceMappingURL=index.js.map