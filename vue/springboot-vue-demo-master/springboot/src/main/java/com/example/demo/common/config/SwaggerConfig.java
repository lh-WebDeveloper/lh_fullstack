//package com.example.demo.common.config;
//
//import com.example.demo.common.Enum.ResultCode;
//import com.github.xiaoymin.knife4j.spring.annotations.EnableKnife4j;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.bind.annotation.RequestMethod;
//import springfox.documentation.builders.*;
//import springfox.documentation.schema.ModelRef;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.service.Parameter;
//import springfox.documentation.service.ResponseMessage;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
///**
// * @Author: zy
// * @Date: 2021/9/6 16:55
// * @desc：
// */
//@Configuration
//@EnableSwagger2
//@EnableKnife4j
//public class SwaggerConfig {
//
//
//    @Bean
//    public Docket petApi(){
//        return new Docket(DocumentationType.SWAGGER_2)
//                .globalResponseMessage(RequestMethod.GET, this.getResponse())
//                .globalResponseMessage(RequestMethod.POST, this.getResponse())
//                .globalResponseMessage(RequestMethod.PUT, this.getResponse())
//                .globalResponseMessage(RequestMethod.DELETE, this.getResponse())
////                .globalOperationParameters(this.getParameters())
//                .groupName("管理端拍照直播接口文档")
//                .apiInfo(apiInfo())
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.zf.photo"))
//                .paths(PathSelectors.any())
//                .build();
//    }
//
//    /**
//     * api说明，包含作者、简介、版本、host、服务url
//     */
//    private ApiInfo apiInfo(){
//        return new ApiInfoBuilder()
//                .title("绽放科技服务")
//                .description("绽放科技平台服务")
//                .version("1.0")
//                .build();
//    }
//
////    private List<Parameter> getParameters() {
////        ParameterBuilder aParameterBuilder = new ParameterBuilder();
////        aParameterBuilder
////                .parameterType("header") //参数类型支持header, cookie, body, query etc
////                .name("Authorization") //参数名
////                .defaultValue("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwiZXhwIjoxNjMxMDAzMzc2fQ.QbHLQCkU-LIApN1hY9QvEQ54hBMALExHcWBZy3hOSJY") //默认值
////                .description("token令牌")
////                .modelRef(new ModelRef("string"))//指定参数值的类型
////                .required(false).build(); //非必需，这里是全局配置，然而在登陆的时候是不用验证的
////        List<Parameter> aParameters = new ArrayList<Parameter>();
////        aParameters.add(aParameterBuilder.build());
////        return aParameters;
////    }
//
//    private List<ResponseMessage> getResponse() {
//        List<ResponseMessage> responseMessageList = new ArrayList<>();
//        Arrays.stream(ResultCode.values()).forEach(errorEnums -> {
//            responseMessageList.add(
//                    new ResponseMessageBuilder().code(errorEnums.getCode()).message(errorEnums.getMsg()).responseModel(
//                            new ModelRef(errorEnums.getMsg())).build()
//            );
//        });
//        return responseMessageList;
//    }
//}
