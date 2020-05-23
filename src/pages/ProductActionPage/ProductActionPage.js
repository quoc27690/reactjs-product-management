import React from "react";

export default function ProductActionPage() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
          />
          <label class="form-check-label">Stocking</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
          />
          <label class="form-check-label">Out of stock</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
