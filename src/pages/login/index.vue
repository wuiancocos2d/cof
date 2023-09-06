<template>
  <view class="login">
<!--    <AtForm>-->
      <AtInput
        name='phone'
        title='手机号'
        type='text'
        placeholder='请填写手机号'
        :value="userPhone"
        @change="(v)=>changeFormVal(v,'userPhone')"
      />
      <AtInput
        name='qcode'
        title='验证码'
        type='text'
        placeholder='验证码'
        :value="qCode"
        @change="(v)=>changeFormVal(v,'qCode')"
      />
      <AtButton open-type="getPhoneNumber"  @click="getPhoneNum">自动获取手机号</AtButton>
      <AtButton formType='submit' @click="sendQCode">发送验证码</AtButton>
      <AtButton formType='submit' @click="onSubmit">提交</AtButton>
<!--    </AtForm>-->
  </view>
</template>

<script lang="ts">
import {reactive, ref, toRefs, unref} from 'vue'
import './index.less'
import {AtForm} from "taro-ui-vue3";
import {authLogin, authSMS} from "@/api/login";
import {parseLoginParam} from "@/utils/login";

export default {
  components: {
    AtForm,
  },
  setup () {
    const formModel = reactive({
      userPhone: '',
      qCode: ''
    })
    async function sendQCode(){
      await authSMS(unref(formModel.userPhone))
    }
    async function getPhoneNum(){}
    async function onSubmit(){
      const res = await authLogin(parseLoginParam(formModel.userPhone,formModel.qCode))
      debugger
    }
    function changeFormVal(v,refV){
      formModel[refV] = v
    }
    return {
      sendQCode,
      getPhoneNum,
      onSubmit,
      changeFormVal,
      ...toRefs(formModel)
    }
  }
}
</script>
