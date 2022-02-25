import _ from 'lodash';

export const getFormatDate = (date: Date) => `${_.padStart(date.getDay(), 2, '0')}/${_.padStart(date.getMonth(), 2, '0')}/${date.getFullYear()}`;
export const getFormatTime = (date: Date) => `${_.padStart(date.getHours(), 2, '0')}:${_.padStart(date.getMinutes(), 2, '0')}`;
