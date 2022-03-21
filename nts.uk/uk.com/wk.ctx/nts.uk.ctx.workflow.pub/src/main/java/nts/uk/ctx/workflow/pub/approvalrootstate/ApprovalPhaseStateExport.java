package nts.uk.ctx.workflow.pub.approvalrootstate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ApprovalPhaseStateExport {

	private Integer phaseOrder;
	
	/**承認区分*/
	/** 0:未承認 
		1:承認済 
		2:否認
	 	3:差し戻し
		4:本人差し戻し */
	private int approvalAtr;
}
