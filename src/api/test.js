import { $api } from './http';
import { COMMON } from '@/utils/constant.js';

const base = COMMON.SERVER_NAME;
export default {
  first: (data) => {
    return $api.post(base + '/api/test/sss', data, {
      'content-type': 'application/json'
    });
  }

};
