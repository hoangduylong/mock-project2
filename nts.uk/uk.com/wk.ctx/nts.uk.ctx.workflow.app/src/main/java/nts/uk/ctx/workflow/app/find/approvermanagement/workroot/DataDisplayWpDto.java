package nts.uk.ctx.workflow.app.find.approvermanagement.workroot;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class DataDisplayWpDto {
	private int id;
	private boolean overLap;
	private List<WorkPlaceAppRootDto> lstWorkplaceRoot;
}
