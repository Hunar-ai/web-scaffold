import { QUESTION_TYPE } from 'Enum';
import { ConversationsProps } from './interfaces/chatBot.interface';

export const data: ConversationsProps = {
    bikeCreate: {
        type: QUESTION_TYPE.SINGLE_SELECT,
        id: 'bike-create',
        key: 'custom_key_1',
        question: {
            msg: 'do you have your own bike with a valid driving license? Please Select the option below.',
            options: [
                {
                    label: 'Bike',
                    next: 'aadhaar-card',
                    value: 'Bike'
                },
                {
                    label: 'Bike and Driving License ',
                    next: 'aadhaar-card',
                    value: 'Bike and Driving License'
                }
            ]
        },
        next: 'aadhaarCard'
    },
    aadhaarCard: {
        type: QUESTION_TYPE.SINGLE_SELECT,
        key: 'custom_key_2',
        id: 'aadhaar_card',
        question: {
            msg: 'Do you have aadhaar_card',
            options: [
                {
                    label: 'Yes',
                    next: 'weekend_job',
                    value: 'Yes'
                },
                {
                    label: 'No',
                    next: 'weekend_job',
                    value: 'No'
                }
            ]
        },
        next: 'start'
    },
    start: {
        type: QUESTION_TYPE.SINGLE_SELECT,
        key: 'startNow',
        id: 'startNow',
        question: {
            msg: 'When can you start',
            options: [
                {
                    label: 'Now',
                    next: 'now',
                    value: 'NOW'
                },
                {
                    label: 'Tomorrow',
                    next: 'tom',
                    value: 'TOMORROW'
                },
                {
                    label: 'In one month',
                    next: 'oneMonth',
                    value: 'ONE_MONTH'
                }
            ]
        },
        next: null
    }
};
