package nts.uk.screen.com.app.find.ccg005.display.information;

import java.util.List;

import lombok.Builder;
import lombok.Data;
import nts.uk.ctx.office.dom.favorite.adapter.EmployeeBasicImport;

@Builder
@Data
public class DisplayInformationDto {

	// 個人基本情報（List）
	private List<EmployeeBasicImport> listPersonalInfo;
}
