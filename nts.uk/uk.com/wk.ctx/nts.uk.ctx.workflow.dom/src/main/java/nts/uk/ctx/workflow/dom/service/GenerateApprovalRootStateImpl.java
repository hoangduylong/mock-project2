package nts.uk.ctx.workflow.dom.service;

import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import nts.arc.time.GeneralDate;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ApplicationType;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.ConfirmationRootType;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.EmploymentRootAtr;
import nts.uk.ctx.workflow.dom.approvermanagement.workroot.SystemAtr;
import nts.uk.ctx.workflow.dom.service.output.AppRootStateConfirmOutput;
import nts.uk.ctx.workflow.dom.service.output.ApprovalRootContentOutput;
import nts.uk.ctx.workflow.dom.service.output.ErrorFlag;
/**
 * 
 * @author Doan Duy Hung
 *
 */
@Stateless
public class GenerateApprovalRootStateImpl implements GenerateApprovalRootStateService {

	@Inject
	private CollectApprovalRootService collectApprovalRootService;

	@Override
	public AppRootStateConfirmOutput getApprovalRootState(String companyID, String employeeID,
			ConfirmationRootType confirmAtr, ApplicationType appType, GeneralDate date) {
		ApprovalRootContentOutput approvalRootContentOutput = collectApprovalRootService
				.getApprovalRootOfSubjectRequest(
				companyID, 
				employeeID, 
				EmploymentRootAtr.CONFIRMATION, 
				confirmAtr.value.toString(), 
				date, 
				SystemAtr.WORK, 
				Optional.empty());
		ErrorFlag errorFlag = approvalRootContentOutput.getErrorFlag();
		switch (errorFlag) {
		case NO_APPROVER:
			return new AppRootStateConfirmOutput(
				true, 
				Optional.ofNullable(approvalRootContentOutput.getApprovalRootState().getRootStateID()), 
				Optional.of("Msg_324"));
			
		case NO_CONFIRM_PERSON:
			return new AppRootStateConfirmOutput(
					true, 
					Optional.ofNullable(approvalRootContentOutput.getApprovalRootState().getRootStateID()), 
					Optional.of("Msg_326"));
			
		case APPROVER_UP_10:
			return new AppRootStateConfirmOutput(
					true, 
					Optional.ofNullable(approvalRootContentOutput.getApprovalRootState().getRootStateID()), 
					Optional.of("Msg_325"));

		default:
			return new AppRootStateConfirmOutput(
					false, 
					Optional.ofNullable(approvalRootContentOutput.getApprovalRootState().getRootStateID()), 
					Optional.empty());
		}
	}
	
	

}
