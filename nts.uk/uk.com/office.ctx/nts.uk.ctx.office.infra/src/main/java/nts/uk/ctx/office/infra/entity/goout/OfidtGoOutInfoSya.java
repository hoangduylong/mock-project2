package nts.uk.ctx.office.infra.entity.goout;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import nts.arc.time.GeneralDate;
import nts.uk.ctx.office.dom.goout.GoOutEmployeeInformation;
import nts.uk.shr.infra.data.entity.ContractUkJpaEntity;

/*
 * UKDesign.データベース.ER図.オフィス支援.在席照会.外出.OFIDT_GO_OUT_INFO_SYA
 * 社員の外出情報
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "OFIDT_GO_OUT_INFO_SYA")
public class OfidtGoOutInfoSya extends ContractUkJpaEntity
		implements GoOutEmployeeInformation.MementoGetter, GoOutEmployeeInformation.MementoSetter, Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// column　会社ID
	@Column(name = "CID")
	private String cid;

	// Embedded primary key 社員ID and 年月日
	@EmbeddedId
	private OfidtGoOutInfoSyaPK pk;

	// column 外出時刻
	@NotNull
	@Column(name = "START_TIME")
	private Integer goOutTime;

	// column 戻り時刻
	@NotNull
	@Column(name = "END_TIME")
	private Integer comebackTime;

	// column 外出理由
	@NotNull
	@Column(name = "GO_OUT_REASON")
	private String goOutReason;

	@Override
	protected Object getKey() {
		return this.pk;
	}

	@Override
	public void setGoOutDate(GeneralDate gouOutDate) {
		if (this.pk == null) {
			this.pk = new OfidtGoOutInfoSyaPK();
		}
		this.pk.setGoOutDate(gouOutDate);
	}

	@Override
	public void setSid(String sid) {
		if (this.pk == null) {
			this.pk = new OfidtGoOutInfoSyaPK();
		}
		this.pk.setSid(sid);
	}

	@Override
	public GeneralDate getGoOutDate() {
		return this.pk.getGoOutDate();
	}

	@Override
	public String getSid() {
		return this.pk.getSid();
	}
}
