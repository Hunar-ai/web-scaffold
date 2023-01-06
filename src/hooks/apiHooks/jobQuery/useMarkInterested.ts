import { useMutation } from '@tanstack/react-query';
import { markInterest } from 'api/jobQuery';
import { ApiError } from 'interfaces';

type Params = {
    companyId: string;
    shortcode: string;
    interestStatus: 'INTERESTED' | 'NOT_INTERESTED';
};

export const useMarkInterested = () => {
    return useMutation<unknown, ApiError, Params>(
        ({ companyId, shortcode, interestStatus }: Params) => {
            return markInterest
                .post({
                    params: { shortcode, companyId },
                    body: {
                        status: interestStatus
                    }
                })
                .then((response: unknown) => {
                    return response;
                })
                .catch((error: ApiError): Promise<ApiError> => {
                    return Promise.reject(error);
                });
        }
    );
};