package nts.uk.ctx.workflow.dom.approvermanagement.workroot.service.unregisterapproval;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.inject.Inject;

import org.apache.logging.log4j.util.Strings;

import nts.arc.time.GeneralDate;
import nts.arc.time.calendar.period.DatePeriod;
import nts.gul.collection.CollectionUtil;
import nts.uk.ctx.workflow.dom.adapter.bs.EmployeeAdapter;
import nts.uk.ctx.workflow.dom.adapter.bs.PersonAdapter;
import nts.uk.ctx.workflow.dom.adapter.bs.dto.EmployeeImport;
import nts.uk.ctx.workflow.dom.adapter.workplace.WkpDepInfo;
import nts.uk.ctx.workflow.dom.adapter.workplace.WorkplaceApproverAdapter;
import nts.uk.ctx.workflow.dom.approvermanagement.setting.ApproverRegisterSet;
import nts.uk.ctx.workflow.dom.approvermanagement.setting.UseClassification;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ApplicationType;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ApprovalPhase;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ApprovalPhaseRepository;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.CompanyApprovalRoot;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.CompanyApprovalRootRepository;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ConfirmationRootType;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.EmploymentRootAtr;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.PersonApprovalRoot;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.PersonApprovalRootRepository;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.SystemAtr;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.WorkplaceApprovalRoot;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.WorkplaceApprovalRootRepository;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.service.masterapproverroot.AppTypeName;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.service.output.EmployeeUnregisterOutput;
import nts.uk.ctx.workflow.dom.service.ApprovalSettingService;

@Stateless
public class EmployeeUnregisterApprovalRootImpl implements EmployeeUnregisterApprovalRoot {
	
	@Inject
	private EmployeeOfApprovalRoot employeeOfApprovalRoot;
	@Inject
	private CompanyApprovalRootRepository comRootRepository;
	@Inject
	private WorkplaceApprovalRootRepository wpRootRepository;
	@Inject
	private PersonApprovalRootRepository psRootRepository;
	@Inject
	private PersonAdapter psInfor;
	@Inject
	private EmployeeAdapter empInfor;
	@Inject
	private WorkplaceApproverAdapter wpNameInfor;
	@Inject
	private ApprovalPhaseRepository repoAppPhase;
	
	@Inject
	private ApprovalSettingService approvalSettingService;
	
	@Override
	public List<EmployeeUnregisterOutput> lstEmployeeUnregister(String companyId, GeneralDate baseDate, int sysAtr,
			List<Integer> lstNotice, List<String> lstEvent, List<AppTypeName> lstName) {
		List<EmployeeImport> lstEmps = empInfor.getEmployeesAtWorkByBaseDate(companyId, baseDate);
		// 承認ルート未登録出力対象としてリスト
		List<EmployeeUnregisterOutput> lstUnRegister = new ArrayList<>();
		// データが０件(data = 0)
		if (CollectionUtil.isEmpty(lstEmps)) {
			return lstUnRegister;
		}
		ApproverRegisterSet approverRegisterSet = approvalSettingService.getSettingUseUnit(companyId, sysAtr);
		//MODE jiji
		if(sysAtr == SystemAtr.HUMAN_RESOURCES.value) {
			// ドメインモデル「会社別就業承認ルート」を取得する(lấy thông tin domain「会社別就業承認ルート」)
			List<CompanyApprovalRoot> lstComs = Collections.emptyList();
			if (approverRegisterSet.getCompanyUnit() == UseClassification.DO_USE) {
				lstComs = comRootRepository.findByBaseDateJinji(companyId, 
						baseDate, lstNotice, lstEvent);
			}
					
			
			List<CompanyApprovalRoot> comInfoCommon = lstComs.stream()
					.filter(x -> x.getApprRoot().getEmploymentRootAtr().value == EmploymentRootAtr.COMMON.value)
					.collect(Collectors.toList());
			if (!CollectionUtil.isEmpty(comInfoCommon)) {
				for (CompanyApprovalRoot companyApprovalRoot : comInfoCommon) {
					List<ApprovalPhase> lstAppPhase = repoAppPhase.getAllApprovalPhasebyCode(companyApprovalRoot.getApprovalId());
					if(!lstAppPhase.isEmpty()){
						return lstUnRegister;
					}
				}
			}
			// ドメインモデル「職場別就業承認ルート」を取得する(lấy thông tin domain 「職場別就業承認ルート」)
			List<WorkplaceApprovalRoot> lstWps = Collections.emptyList();
			if (approverRegisterSet.getWorkplaceUnit() == UseClassification.DO_USE) {
				lstWps = wpRootRepository.findByBaseDateJinji(companyId,
						baseDate, lstNotice, lstEvent);
			}
			// ドメインモデル「個人別就業承認ルート」を取得する(lấy thông tin domain 「個人別就業承認ルート」)
			List<PersonApprovalRoot> lstPss = Collections.emptyList();
			if (approverRegisterSet.getEmployeeUnit() == UseClassification.DO_USE) {
				lstPss = psRootRepository.findByBaseDateJinji(companyId,
						baseDate, lstNotice, lstEvent);
			}
			for (EmployeeImport empImport : lstEmps) {
				List<String> appTypesN = new ArrayList<>();
				//NOTICE
				for (Integer notice : lstNotice) {
					// 社員の対象申請の承認ルートを取得する(lấy dữ liệu approve route của đối tượng đơn xin của nhân viên)
					boolean isEmpRoot =false;
					isEmpRoot = employeeOfApprovalRoot.lstEmpApprovalRoot(companyId, lstComs, lstWps, lstPss, empImport,
							notice.toString(), baseDate, 4, sysAtr);
					// 承認ルート未登録出力対象として追加する(thêm vào đối tượng chưa cài đặt approve route để output)
					if (!isEmpRoot) {
						appTypesN.add(this.findName(lstName, notice, null, EmploymentRootAtr.NOTICE.value));
					}
				}
				//EVENT
				for (String event : lstEvent) {
					// 社員の対象申請の承認ルートを取得する(lấy dữ liệu approve route của đối tượng đơn xin của nhân viên)
					boolean isEmpRoot =false;
					isEmpRoot = employeeOfApprovalRoot.lstEmpApprovalRoot(companyId, lstComs, lstWps, lstPss, empImport,
							event, baseDate, 5, sysAtr);
					// 承認ルート未登録出力対象として追加する(thêm vào đối tượng chưa cài đặt approve route để output)
					if (!isEmpRoot) {
						appTypesN.add(this.findName(lstName, null, event, EmploymentRootAtr.BUS_EVENT.value));
					}
				}
				//Dep info
				String id = Strings.EMPTY;
				Optional<WkpDepInfo> wkpDepO = Optional.empty();
				id = wpNameInfor.getDepartmentIDByEmpDate(empImport.getSId(), baseDate);
				wkpDepO = wpNameInfor.findByDepIdNEW(companyId, id, baseDate);
				if(!wkpDepO.isPresent()) {
					wkpDepO = Optional.of(new WkpDepInfo("","コード削除済", "コード削除済"));
				}
				WkpDepInfo wkpDep = wkpDepO.get();
				empImport.setWpCode(wkpDep.getCode());
				empImport.setWpName(wkpDep.getName());
				if (!CollectionUtil.isEmpty(appTypesN)) {
					empImport.setPName(psInfor.getPersonInfo(empImport.getSId()).getEmployeeName());
					EmployeeUnregisterOutput dataOuput = new EmployeeUnregisterOutput(empImport, appTypesN);
					lstUnRegister.add(dataOuput);
				}
			}
			
		}else {//MODE SHUUGYOU
			// ドメインモデル「会社別就業承認ルート」を取得する(lấy thông tin domain「会社別就業承認ルート」)
			List<CompanyApprovalRoot> lstComs = comRootRepository.findByBaseDate(companyId, baseDate, sysAtr);
			
			List<CompanyApprovalRoot> comInfoCommon = lstComs.stream()
					.filter(x -> x.getApprRoot().getEmploymentRootAtr().value == EmploymentRootAtr.COMMON.value)
					.collect(Collectors.toList());
			if (!CollectionUtil.isEmpty(comInfoCommon)) {
				for (CompanyApprovalRoot companyApprovalRoot : comInfoCommon) {
					List<ApprovalPhase> lstAppPhase = repoAppPhase.getAllApprovalPhasebyCode(companyApprovalRoot.getApprovalId());
					if(!lstAppPhase.isEmpty()){
						return lstUnRegister;
					}
				}
			}
			// 就業ルート区分が共通の「会社別就業承認ルート」がない場合(không có thông tin 「会社別就業承認ルート」 của 就業ルート区分là common)
			// ドメインモデル「職場別就業承認ルート」を取得する(lấy thông tin domain 「職場別就業承認ルート」)
			List<WorkplaceApprovalRoot> lstWps = wpRootRepository.findAllByBaseDate(companyId, baseDate, sysAtr);
			// ドメインモデル「個人別就業承認ルート」を取得する(lấy thông tin domain 「個人別就業承認ルート」)
			List<PersonApprovalRoot> lstPss = psRootRepository.findAllByBaseDate(companyId, baseDate, sysAtr);
			for (EmployeeImport empImport : lstEmps) {
				List<String> appTypes = new ArrayList<>();
				//APPLICATION
				for (ApplicationType appType : ApplicationType.values()) {
					// 社員の対象申請の承認ルートを取得する(lấy dữ liệu approve route của đối tượng đơn xin của nhân viên)
					boolean isEmpRoot =false;
					isEmpRoot = employeeOfApprovalRoot.lstEmpApprovalRoot(companyId, lstComs, lstWps, lstPss, empImport,
							appType.value.toString(), baseDate, 1, sysAtr);
					// 承認ルート未登録出力対象として追加する(thêm vào đối tượng chưa cài đặt approve route để output)
					if (!isEmpRoot) {
						appTypes.add(appType.nameId);
					}
				}
				//CONFIRM
				for (ConfirmationRootType conf : ConfirmationRootType.values()) {
					// 社員の対象申請の承認ルートを取得する(lấy dữ liệu approve route của đối tượng đơn xin của nhân viên)
					boolean isEmpRoot =false;
					isEmpRoot = employeeOfApprovalRoot.lstEmpApprovalRoot(companyId, lstComs, lstWps, lstPss, empImport,
							conf.value.toString(), baseDate, 2, sysAtr);
					// 承認ルート未登録出力対象として追加する(thêm vào đối tượng chưa cài đặt approve route để output)
					if (!isEmpRoot) {
						appTypes.add(conf.nameId);
					}
				}
				//wkp info
				String id = Strings.EMPTY;
				Optional<WkpDepInfo> wkpDepO = Optional.empty();
				id = wpNameInfor.getWorkplaceIDByEmpDate(empImport.getSId(), baseDate);
				wkpDepO = wpNameInfor.findByWkpIdNEW(companyId, id, baseDate);
				if(!wkpDepO.isPresent()) {
					wkpDepO = Optional.of(new WkpDepInfo("","コード削除済", "コード削除済"));
				}
				WkpDepInfo wkpDep = wkpDepO.get();
				empImport.setWpCode(wkpDep.getCode());
				empImport.setWpName(wkpDep.getName());
				if (!CollectionUtil.isEmpty(appTypes)) {
					empImport.setPName(psInfor.getPersonInfo(empImport.getSId()).getEmployeeName());
					EmployeeUnregisterOutput dataOuput = new EmployeeUnregisterOutput(empImport, appTypes);
					lstUnRegister.add(dataOuput);
				}
			}
		}
		return lstUnRegister;
	}

	private String findName(List<AppTypeName> lstName, Integer notice, String event, int empR) {
		if(empR == EmploymentRootAtr.NOTICE.value) {
			for(AppTypeName app :  lstName) {
				if(app.getEmpRAtr() == empR && Integer.valueOf(app.getValue()).equals(notice)) {
					return app.getName();
				}
			}
			return "コード削除済";
		}
		for(AppTypeName app :  lstName) {
			if(app.getEmpRAtr() == empR && app.getValue().equals(event)) {
				return app.getName();
			}
		}
		return "コード削除済";
	}

	@Override
	public Map<String, List<String>> lstEmplUnregister(String cid, DatePeriod period, List<String> lstSid) {
		Map<String, List<String>> mapResult = new HashMap<String, List<String>>();
		if(lstSid.isEmpty()) return mapResult;
		// ドメインモデル「会社別就業承認ルート」を取得する(lấy thông tin domain「会社別就業承認ルート」)
		List<Integer> lstRootAtr = new ArrayList<>();
		lstRootAtr.add(EmploymentRootAtr.COMMON.value);
		lstRootAtr.add(EmploymentRootAtr.APPLICATION.value);
		List<CompanyApprovalRoot> lstComs = comRootRepository.findByDatePeriod(cid,
				period, SystemAtr.WORK, lstRootAtr);

		List<CompanyApprovalRoot> comInfoCommon = lstComs.stream()
				.filter(x -> x.getApprRoot().getEmploymentRootAtr().value == EmploymentRootAtr.COMMON.value)
				.collect(Collectors.toList());
		if (!CollectionUtil.isEmpty(comInfoCommon)) {
			for (CompanyApprovalRoot companyApprovalRoot : comInfoCommon) {
				List<ApprovalPhase> lstAppPhase = repoAppPhase.getAllApprovalPhasebyCode(companyApprovalRoot.getApprovalId());
				if(!lstAppPhase.isEmpty()){
					return mapResult;
				}
			}
		}
		// 就業ルート区分が共通の「会社別就業承認ルート」がない場合(không có thông tin 「会社別就業承認ルート」 của 就業ルート区分là common)
		// ドメインモデル「職場別就業承認ルート」を取得する(lấy thông tin domain 「職場別就業承認ルート」)
		List<WorkplaceApprovalRoot> lstWps = wpRootRepository.getAppRootByDatePeriod(cid,
				period, SystemAtr.WORK, lstRootAtr);
		// ドメインモデル「個人別就業承認ルート」を取得する(lấy thông tin domain 「個人別就業承認ルート」)
		List<PersonApprovalRoot> lstPss = psRootRepository.getAppRootByDatePeriod(cid,
							period, SystemAtr.WORK, lstRootAtr);
		for(String sid: lstSid) {
			List<String> appTypes = new ArrayList<>();
			EmployeeImport empInfor = new EmployeeImport();
			empInfor.setCompanyId(cid);
			empInfor.setSId(sid);
			for(GeneralDate date : period.datesBetween()) {
				List<CompanyApprovalRoot> lstComsDate = lstComs.stream()
						.filter(com -> com.getApprRoot().getHistoryItems()
								.stream()
								.filter(his -> his.getDatePeriod().start().beforeOrEquals(date)
										&& his.getDatePeriod().end().afterOrEquals(date)).collect(Collectors.toList()).size() > 0)
						.collect(Collectors.toList());
				List<WorkplaceApprovalRoot> lstWpsDate = lstWps.stream()
						.filter(com -> com.getApprRoot().getHistoryItems()
								.stream()
								.filter(his -> his.getDatePeriod().start().beforeOrEquals(date)
										&& his.getDatePeriod().end().afterOrEquals(date)).collect(Collectors.toList()).size() > 0)
						.collect(Collectors.toList());
				List<PersonApprovalRoot> lstPssDate = lstPss.stream()
						.filter(com -> com.getEmployeeId().equals(sid) && com.getApprRoot().getHistoryItems()
								.stream()
								.filter(his -> his.getDatePeriod().start().beforeOrEquals(date)
										&& his.getDatePeriod().end().afterOrEquals(date)).collect(Collectors.toList()).size() > 0)
						.collect(Collectors.toList());
				//APPLICATION
				for (ApplicationType appType : ApplicationType.values()) {
					// 社員の対象申請の承認ルートを取得する(lấy dữ liệu approve route của đối tượng đơn xin của nhân viên)
					boolean isEmpRoot =false;
					isEmpRoot = employeeOfApprovalRoot.lstEmpApprovalRoot(cid, lstComsDate, lstWpsDate, lstPssDate, empInfor,
							appType.value.toString(), date, 1, SystemAtr.WORK.value);
					// 承認ルート未登録出力対象として追加する(thêm vào đối tượng chưa cài đặt approve route để output)
					if (!isEmpRoot) {
						appTypes.add(appType.nameId);
					}
				}
			}
			if(!appTypes.isEmpty()) {
				mapResult.put(sid, appTypes.stream().distinct().collect(Collectors.toList()));
			}
		}
		return mapResult;
	}
}
