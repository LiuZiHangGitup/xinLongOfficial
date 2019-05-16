import { postRequest, GET } from '@/util/request'

export const login = (phoneNumber, code) => postRequest('/auth/auth_fast_login', {
  phoneNumber: phoneNumber,
  smsCode: code
})

export const qryCode = (phoneNumber) => postRequest('/other/other_sms_code', { phoneNumber: phoneNumber })

export const postForm = (formData) => postRequest('/service/service_submit', {
  serviceId: formData.serviceId,
  linkName: formData.linkName,
  linkAdd: formData.linkAdd,
  linkPhone: formData.linkPhone,
  remark: formData.remark,
  job: formData.job,
  extentd: formData.extentd
})
export const getUserInfo = () => GET('/member/member_check_token')
