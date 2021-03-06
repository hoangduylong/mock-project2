package nts.uk.ctx.pereg.app.find.processor;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.enterprise.inject.spi.CDI;
import javax.enterprise.util.TypeLiteral;

import find.person.contact.PersonContactDto;
import find.person.info.PersonDto;
import nts.uk.ctx.at.record.app.find.dailyperformanceformat.businesstype.BusinessTypeDto;
import nts.uk.ctx.at.record.app.find.stamp.card.stampcard.PeregStampCardDto;
import nts.uk.ctx.at.shared.app.find.dailyattdcal.empunitpricehistory.EmployeeUnitPriceDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.annualleave.AnnualLeaveDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave10informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave11informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave12informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave13informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave14informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave15informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave16informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave17informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave18informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave19informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave1InformationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave20informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave2informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave3informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave4informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave5informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave6informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave7informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave8informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.empinfo.basicinfo.Specialleave9informationDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.nursingcareleave.CareLeaveInfoDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.otherhdinfo.OtherHolidayInfoDto;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto1;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto10;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto11;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto12;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto13;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto14;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto15;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto16;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto17;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto18;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto19;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto2;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto20;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto3;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto4;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto5;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto6;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto7;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto8;
import nts.uk.ctx.at.shared.app.find.remainingnumber.specialleavegrant.finder.SpecialLeaveGrantDto9;
import nts.uk.ctx.at.shared.app.find.shortworktime.ShortWorkTimeDto;
import nts.uk.ctx.at.shared.app.find.workingcondition.WorkingCondition2Dto;
import nts.uk.ctx.at.shared.app.find.workingcondition.WorkingConditionDto;
import nts.uk.ctx.bs.employee.app.find.classification.affiliate.AffClassificationDto;
import nts.uk.ctx.bs.employee.app.find.department.affiliate.AffDeptHistDto;
import nts.uk.ctx.bs.employee.app.find.employee.contact.EmpInfoContactDto;
import nts.uk.ctx.bs.employee.app.find.employee.history.AffCompanyHistInfoDto;
import nts.uk.ctx.bs.employee.app.find.employee.mngdata.EmployeeDataMngInfoDto;
import nts.uk.ctx.bs.employee.app.find.jobtitle.affiliate.AffJobTitleDto;
import nts.uk.ctx.bs.employee.app.find.temporaryabsence.TempAbsHisItemDto;
import nts.uk.ctx.bs.employee.app.find.workplace.affiliate.AffWorlplaceHistItemDto;
import nts.uk.ctx.pereg.app.find.employment.history.EmploymentHistoryDto;
import nts.uk.ctx.pr.shared.app.find.socialinsurance.employeesociainsur.empcomofficehis.EmpCorpHealthOffHisDto;
import nts.uk.ctx.pr.shared.app.find.socialinsurance.employeesociainsur.emphealinsurbeneinfo.EmpHealInsQualifiInfoDto;
import nts.uk.ctx.pr.shared.app.find.socialinsurance.employeesociainsur.empsocialinsgradehis.EmpSocialInsGradeInforDto;
import nts.uk.ctx.sys.gateway.app.find.login.password.userpassword.PeregLoginPasswordDto;
import nts.uk.shr.pereg.app.find.PeregFinder;

@Stateless
@SuppressWarnings("serial")
public class PeregLayoutingProcessorCollectorImpl implements PeregFinderProcessorCollector {


	/** ctg single finder */
	private static final List<TypeLiteral<?>> FINDER_CTG_SINGLE_HANDLER_CLASSES = Arrays.asList(
			// CS00001  ?????????????????????
			new TypeLiteral<PeregFinder<EmployeeDataMngInfoDto>>() {
			},
			// CS00002 ??????????????????
			new TypeLiteral<PeregFinder<PersonDto>>() {
			},
			// CS00003 ??????????????????
			new TypeLiteral<PeregFinder<AffCompanyHistInfoDto>>() {
			},
			// CS00004 ?????????
			new TypeLiteral<PeregFinder<AffClassificationDto>>() {
			},
			// CS00014 ??????
			new TypeLiteral<PeregFinder<EmploymentHistoryDto>>() {
			},
			// CS00015 ????????????	
			new TypeLiteral<PeregFinder<AffDeptHistDto>>() {
			},
			// CS00016 ????????????
			new TypeLiteral<PeregFinder<AffJobTitleDto>>() {
			},
			// CS00017 ??????
			new TypeLiteral<PeregFinder<AffWorlplaceHistItemDto>>() {
			},
			// CS00018 ????????????
			new TypeLiteral<PeregFinder<TempAbsHisItemDto>>() {
			},
			// CS00019 ???????????????
			new TypeLiteral<PeregFinder<ShortWorkTimeDto>>() {
			},
			// CS00020 ????????????
			new TypeLiteral<PeregFinder<WorkingConditionDto>>() {
			},
			// CS00021 ????????????
			new TypeLiteral<PeregFinder<BusinessTypeDto>>() {
			},
			// CS00022 ???????????????
			new TypeLiteral<PeregFinder<PersonContactDto>>() {
			},
			// CS00023 ???????????????
			new TypeLiteral<PeregFinder<EmpInfoContactDto>>() {
			},
			// CS00024 ????????????
			new TypeLiteral<PeregFinder<AnnualLeaveDto>>() {
			},
			// CS00025 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave1InformationDto>>() {
			},
			// CS00026 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave2informationDto>>() {
			},
			// CS00027 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave3informationDto>>() {
			},
			// CS00028 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave4informationDto>>() {
			},
			// CS00029 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave5informationDto>>() {
			},
			// CS00030 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave6informationDto>>() {
			},
			// CS00031 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave7informationDto>>() {
			},
			// CS00032 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave8informationDto>>() {
			},
			// CS00033 ?????????????????????
			new TypeLiteral<PeregFinder<Specialleave9informationDto>>() {
			},
			// CS00034 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave10informationDto>>() {
			},
			// CS00035 ?????????????????????
			new TypeLiteral<PeregFinder<OtherHolidayInfoDto>>() {
			},
			// CS00036 ?????????????????????????????????
			new TypeLiteral<PeregFinder<CareLeaveInfoDto>>() {
			},
			// CS00049 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave11informationDto>>() {
			},
			// CS00050 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave12informationDto>>() {
			},
			// CS00051 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave13informationDto>>() {
			},
			// CS00052 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave14informationDto>>() {
			},
			// CS00053 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave15informationDto>>() {
			},
			// CS00054 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave16informationDto>>() {
			},
			// CS00055 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave17informationDto>>() {
			},
			// CS00056 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave18informationDto>>() {
			},
			// CS00057 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave19informationDto>>() {
			},
			// CS00058 ????????????????????????
			new TypeLiteral<PeregFinder<Specialleave20informationDto>>() {
			},
			// CS00039  ???????????????????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto1>>() {
			},
			// CS00040  ????????????2????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto2>>() {
			},
			// CS00041  ????????????3????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto3>>() {
			},
			// CS00042  ????????????4????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto4>>() {
			},
			// CS00043  ????????????5????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto5>>() {
			},
			// CS00044  ????????????6????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto6>>() {
			},
			// CS00045  ????????????7????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto7>>() {
			},
			// CS00046  ????????????8????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto8>>() {
			},
			// CS00047  ????????????9????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto9>>() {
			},
			// CS00048  ???????????????0????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto10>>() {
			},
			// CS00059 ??????????????????????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto11>>() {
			},
			// CS00060  ????????????12????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto12>>() {
			},
			// CS00061  ????????????13????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto13>>() {
			},
			// CS00062  ????????????14????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto14>>() {
			},
			// CS00063  ????????????15????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto15>>() {
			},
			// CS00064  ????????????16????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto16>>() {
			},
			// CS00065  ????????????17????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto17>>() {
			},
			// CS00066  ????????????18????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto18>>() {
			},
			// CS00067  ????????????19????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto19>>() {
			},
			// CS00068  ????????????20????????????
			new TypeLiteral<PeregFinder<SpecialLeaveGrantDto20>>() {
			},
			// CS00069 ?????????????????????
			new TypeLiteral<PeregFinder<PeregStampCardDto>>() {
			},
			// CS00070  ???????????????
			new TypeLiteral<PeregFinder<WorkingCondition2Dto>>() {
			},
			//CS00075
			new TypeLiteral<PeregFinder<EmpCorpHealthOffHisDto>>() {
			},
			// CS00082
			new TypeLiteral<PeregFinder<EmpHealInsQualifiInfoDto>>() {
			},
			// CS00092
			new TypeLiteral<PeregFinder<EmpSocialInsGradeInforDto>>() {
			},
			// CS00100 ???????????????
			new TypeLiteral<PeregFinder<PeregLoginPasswordDto>>() {
			},
			// CS00097 ??????
			new TypeLiteral<PeregFinder<EmployeeUnitPriceDto>>() {
			}
	);

	@Override
	public Set<PeregFinder<?>> peregFinderCollect() {
		return FINDER_CTG_SINGLE_HANDLER_CLASSES.stream().map(type -> CDI.current().select(type).get())
				.map(obj -> (PeregFinder<?>) obj).collect(Collectors.toSet());
	}

}
