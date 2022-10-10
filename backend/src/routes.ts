import { getAllQuestions } from './controller/QuestionsGetAll';

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/questions",
        method: "get",
        action: getAllQuestions
    }
];